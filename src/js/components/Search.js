import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Search {
  constructor(data) {
    const thisSearch = this;

    thisSearch.data = data;

    thisSearch.render();
    thisSearch.getData();
    // thisSearch.searchSong();

  }

  render() {
    const thisSearch = this;

    // thisSearch.dom = {};
    // thisSearch.dom.wrapper = searchPage;

    // const generatedHTML = templates.searchPage();
    // const generatedDOM = utils.createDOMFromHTML(generatedHTML);

    // thisSearch.dom.wrapper.appendChild(generatedDOM);

    const generatedHTML = templates.searchPage(thisSearch.data);
    thisSearch.element = utils.createDOMFromHTML(generatedHTML);
    const searchContainer = document.querySelector(select.containerOf.searchPage);
    searchContainer.appendChild(thisSearch.element);
  }

  getData() {
    const thisSearch = this;

    thisSearch.songsArray = document.querySelectorAll(select.containerOf.songsWrapper);
    console.log('thisSearch.songsArray', thisSearch.songsArray);
  }

  // searchSong() {
  //   const thisSearch = this;

  // }
}

export default Search;