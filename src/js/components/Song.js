import { templates } from '../settings.js';
import utils from '../utils.js';

class Song {
  constructor(data, wrapper) {
    const thisSong = this;

    thisSong.data = data;
    thisSong.wrapper = wrapper;

    thisSong.render();

  }

  render() {
    const thisSong = this;

    const generatedHTML = templates.mainPageSongs(thisSong.data);
    thisSong.element = utils.createDOMFromHTML(generatedHTML);
    // const mainPageContainer = document.querySelector(select.containerOf.mainPage);
    thisSong.wrapper.appendChild(thisSong.element);
  }
}

export default Song;