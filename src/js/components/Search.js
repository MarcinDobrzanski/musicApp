import { templates, select, classNames } from '../settings.js';
import utils from '../utils.js';

class Search {
  constructor(item, data) {
    const thisSearch = this;

    thisSearch.dom = item;
    thisSearch.data = data;

    thisSearch.render();
    thisSearch.getElements();
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

    thisSearch.dom.searchResult = [];

    thisSearch.dom.searchButton.addEventListener('click', function (event) {
      event.preventDefault();
      const searchPhrase = thisSearch.dom.searchTerms.value;

      for (let song of thisSearch.dom.songsWrapper) {
        const lowerCaseTittle = song.children[0].children[0].textContent.toLowerCase();
        song.classList.remove(classNames.pages.active);
        if (lowerCaseTittle.indexOf(searchPhrase) > -1) {
          song.classList.add(classNames.pages.active);
          thisSearch.dom.searchResult.push(song);
        }
      }
      const categoriesLength = thisSearch.dom.searchResult.length;
      if (categoriesLength < 2) {
        thisSearch.dom.qtySearch.innerHTML = 'We have found ' + categoriesLength + ' song...';
      } else {
        thisSearch.dom.qtySearch.innerHTML = 'We have found ' + categoriesLength + ' songs...';
      }
    });

  }
}

export default Search;