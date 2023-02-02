import { templates, select, settings } from '../settings.js';
import utils from '../utils.js';

class Discover {
  constructor(item, songs, categories) {
    const thisDiscover = this;

    thisDiscover.item = item;
    thisDiscover.songs = songs;
    thisDiscover.categories = categories;

    thisDiscover.randomNumber();
    thisDiscover.getSongs();
    thisDiscover.render();

  }

  randomNumber() {
    const thisDiscover = this;

    let min = settings.songs.min;
    let max = thisDiscover.songs.length;

    const randomDiscoverNumber = Math.floor(Math.random() * (max - min + 1) + min);

    thisDiscover.randomNumber = randomDiscoverNumber;
    console.log('thisDiscover.randomNumber', thisDiscover.randomNumber);
  }

  getSongs() {
    const thisDiscover = this;

    const foundSong = thisDiscover.randomNumber - 1;
    const rightSong = thisDiscover.songs[foundSong];
    thisDiscover.rightSong = rightSong;
    console.log('rightSong', rightSong);
  }

  render() {
    const thisDiscover = this;

    const generatedHTML = templates.discoverPage(thisDiscover.rightSong);
    thisDiscover.element = utils.createDOMFromHTML(generatedHTML);
    const discoverContainer = document.querySelector(select.containerOf.discoverPage);
    discoverContainer.appendChild(thisDiscover.element);
  }
  
}

export default Discover;