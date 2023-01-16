import { templates, select, settings } from '../settings.js';
import utils from '../utils.js';

class Discover {
  constructor(item) {
    const thisDiscover = this;

    thisDiscover.item = item;


    thisDiscover.render();
    thisDiscover.randomSongs();
    thisDiscover.getData();
    thisDiscover.getSongs();

  }

  render() {
    const thisDiscover = this;

    const generatedHTML = templates.discoverPage(thisDiscover.item);
    thisDiscover.element = utils.createDOMFromHTML(generatedHTML);
    const discoverContainer = document.querySelector(select.containerOf.discoverPage);
    discoverContainer.appendChild(thisDiscover.element);
  }

  randomSongs(min, max) {
    const thisDiscover = this;

    min = Math.ceil(settings.songs.min);
    max = Math.floor(settings.songs.max);

    const randomDiscoverSongs = Math.floor(Math.random() * (max - min + 1) + min);

    thisDiscover.randomSong = randomDiscoverSongs;
    console.log('thisDiscover.randomSong', thisDiscover.randomSong);
  }

  getData() {
    const thisDiscover = this;

    thisDiscover.songs = document.querySelectorAll(select.containerOf.songsWrapper);
    console.log('thisDiscover.songs', thisDiscover.songs);

  }

  getSongs() {
    const thisDiscover = this;

    const foundSong = thisDiscover.randomSong - 1;
    const rightSong = thisDiscover.songs[foundSong];
    console.log('rightSong', rightSong);

    const discoverSongWrapper = document.querySelector(select.containerOf.songsDiscoverWrapper);
    const cloneSong = rightSong.cloneNode(true);
    console.log('cloneSong', cloneSong);

    discoverSongWrapper.appendChild(cloneSong);
    console.log('discoverSongWrapper', discoverSongWrapper);


  }
}

export default Discover;