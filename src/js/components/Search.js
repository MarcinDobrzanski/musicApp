import { templates, select, classNames } from '../settings.js';
import utils from '../utils.js';

class Search {
  constructor(item, data) {
    const thisSearch = this;

    thisSearch.dom = item;
    thisSearch.data = data;

    thisSearch.dom.searchResult = [];
    thisSearch.categories = [];

    thisSearch.render();
    thisSearch.getElements();
    thisSearch.prepareCategory();
    thisSearch.searchSong();

  }

  render() {
    const thisSearch = this;

    const generatedHTML = templates.searchPage(thisSearch.dom);
    thisSearch.element = utils.createDOMFromHTML(generatedHTML);
    const searchContainer = document.querySelector(select.containerOf.searchPage);
    searchContainer.appendChild(thisSearch.element);
  }

  getElements() {
    const thisSearch = this;

    thisSearch.dom.searchButton = document.querySelector(select.forms.input);
    thisSearch.dom.searchTerms = document.querySelector(select.forms.inputPlaceholder);
    thisSearch.dom.songsWrapper = document.querySelectorAll(select.containerOf.songSearchWrapper);
    thisSearch.dom.qtySearch = document.querySelector(select.search.qtySearch);

  }

  searchSong() {
    const thisSearch = this;

    thisSearch.dom.searchButton.addEventListener('click', function (event) {
      event.preventDefault();
      const searchPhrase = thisSearch.dom.searchTerms.value;

      for (let song of thisSearch.dom.songsWrapper) {
        const lowerCaseTittle = song.children[0].children[0].textContent.toLowerCase();
        song.classList.remove(classNames.pages.active);
        thisSearch.dom.searchResult.length = 0;
        if (lowerCaseTittle.indexOf(searchPhrase) > -1) {
          song.classList.add(classNames.pages.active);
          thisSearch.dom.searchResult.push(song);
        }
      }
      console.log('thisSearch.dom.searchResult', thisSearch.dom.searchResult);
      const categoriesLength = thisSearch.dom.searchResult.length;
      if (categoriesLength == 1) {
        thisSearch.dom.qtySearch.innerHTML = 'We have found ' + categoriesLength + ' song...';
      } else {
        thisSearch.dom.qtySearch.innerHTML = 'We have found ' + categoriesLength + ' songs...';
      }
    });

  }

  prepareCategory() {
    const thisSearch = this;

    for (let song of thisSearch.data) {
      for (let item of song.categories) {
        if (!thisSearch.categories.includes(item)) {
          thisSearch.categories.push(item);
        }
      }
    }

    console.log('thisSearch.categories', thisSearch.categories);

    const searchInputCategories = document.querySelector(select.forms.searchCategories);
    const categoryOptionHTML = '<option id="option-category" value="default"> </option>';
    searchInputCategories.innerHTML = categoryOptionHTML;

    for (let category of thisSearch.categories) {
      const searchInputCategories = document.querySelector(select.forms.searchCategories);
      const categoryFilterHTML = '<option id="option-category" value="' + category + '">' + category + '</option>';
      searchInputCategories.innerHTML += categoryFilterHTML;
    }

  }
}

export default Search;