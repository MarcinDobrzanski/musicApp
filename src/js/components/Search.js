import { templates } from '../settings.js';
import utils from '../utils.js';

class Search {
  constructor(searchPage) {
    const thisSearch = this;

    thisSearch.render(searchPage);

  }

  render(searchPage) {
    const thisSearch = this;

    thisSearch.dom = {};
    thisSearch.dom.wrapper = searchPage;

    const generatedHTML = templates.searchPage();
    // console.log({generatedHTML});
    const generatedDOM = utils.createDOMFromHTML(generatedHTML);
    // console.log({generatedDOM});

    thisSearch.dom.wrapper.appendChild(generatedDOM);
  }
}

export default Search;