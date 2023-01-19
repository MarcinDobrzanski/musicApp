import { templates, select, settings } from '../settings.js';
import utils from '../utils.js';

class Discover {
  constructor(item, songs) {
    const thisDiscover = this;

    thisDiscover.item = item;
    thisDiscover.songs = songs;
    console.log('thisDiscover.songs', thisDiscover.songs);
    console.log('thisDiscover.item', thisDiscover.item);

    thisDiscover.randomNumber();
    thisDiscover.getSongs();
    thisDiscover.render();

  }

  randomNumber() {
    const thisDiscover = this;

    let min = settings.songs.min;
    let max = settings.songs.max;

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

    // const discoverSongWrapper = document.querySelector(select.containerOf.songsDiscoverWrapper);
    // console.log('discoverSongWrapper', discoverSongWrapper);
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