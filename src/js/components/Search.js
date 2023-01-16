import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Search {
  constructor(data) {
    const thisSearch = this;

    thisSearch.data = data;

    thisSearch.render();
    thisSearch.getData();
    thisSearch.searchSong();

  }

  render() {
    const thisSearch = this;

    const generatedHTML = templates.searchPage(thisSearch.data);
    thisSearch.element = utils.createDOMFromHTML(generatedHTML);
    const searchContainer = document.querySelector(select.containerOf.searchPage);
    searchContainer.appendChild(thisSearch.element);
  }

  getData() {
    const thisSearch = this;

    thisSearch.data.songsArray = document.querySelectorAll(select.containerOf.songsWrapper);
    console.log('thisSearch.songsArray', thisSearch.songsArray);
    thisSearch.data.searchTerms = document.querySelector(select.forms.input);
    console.log('thisSearch.searchTerms', thisSearch.data.searchTerms);

  }

  searchSong() {
    const thisSearch = this;

    thisSearch.data.searchTerms.addEventListener('click', function (event) {
      event.preventDefault();
    });

  }
}

export default Search;