import { templates, select, settings } from '../settings.js';
import utils from '../utils.js';

class Discover {
  constructor(item) {
    const thisDiscover = this;

    thisDiscover.item = item;

    thisDiscover.render();
    thisDiscover.getRandomSongs();

  }

  render() {
    const thisDiscover = this;

    const generatedHTML = templates.discoverPage(thisDiscover.item);
    thisDiscover.element = utils.createDOMFromHTML(generatedHTML);
    const discoverContainer = document.querySelector(select.containerOf.discoverPage);
    discoverContainer.appendChild(thisDiscover.element);
  }

  getRandomSongs(min, max) {

    min = Math.ceil(settings.songs.min);
    max = Math.floor(settings.songs.max);

    const discoverSongs = Math.floor(Math.random() * (max - min + 1) + min);
    console.log('song', discoverSongs);
  }
}

export default Discover;