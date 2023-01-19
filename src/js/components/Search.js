import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Search {
  constructor(item, data) {
    const thisSearch = this;

    thisSearch.dom = item;
    thisSearch.data = data;
    console.log('Search.data', thisSearch.data);

    thisSearch.dom.songsFound = [];

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
    console.log('thisSearch.dom.songsWrapper', thisSearch.dom.songsWrapper);

  }

  searchSong() {
    const thisSearch = this;

    thisSearch.dom.searchButton.addEventListener('click', function (event) {
      event.preventDefault();
      const searchPhrase = thisSearch.dom.searchTerms.value;
      console.log('thisSearch.data.searchSong', searchPhrase);

      for (let song of thisSearch.data) {
        const lowerCaseTittle = song.title.toLowerCase();
        console.log('upperCaseTittle', lowerCaseTittle);
        if (lowerCaseTittle.indexOf(searchPhrase) > -1) {
          thisSearch.dom.songsFound.push(song);
        }
      }
      console.log('thisSearch.dom.songsSearch', thisSearch.dom.songsFound);

      // for (let song of thisSearch.dom.songsWrapper) {
      //   if(song.children[0].children[0].textContent)
      //   console.log('song', song);
      //   // song.classList.remove(classNames.menuProduct.wrapperActive);
      // }
    });

  }
}

export default Search;