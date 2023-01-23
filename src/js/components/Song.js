import { templates } from '../settings.js';
import utils from '../utils.js';

class Song {
  constructor(data, wrapper) {
    const thisSong = this;

    thisSong.data = data;
    thisSong.wrapper = wrapper;

    thisSong.render();
    thisSong.categoryFilter();

  }

  render() {
    const thisSong = this;

    const generatedHTML = templates.mainPageSongs(thisSong.data);
    thisSong.element = utils.createDOMFromHTML(generatedHTML);
    // const mainPageContainer = document.querySelector(select.containerOf.mainPage);
    thisSong.wrapper.appendChild(thisSong.element);
  }

  categoryFilter() {
    const thisSong = this;

    thisSong.allCategory = [];
    
    const categoryFromSong = thisSong.data.categories;
    thisSong.allCategory.push(categoryFromSong);
  }
}

export default Song;