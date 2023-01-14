import { templates, select, settings } from '../settings.js';
import utils from '../utils.js';

class Discover {
  constructor(item) {
    const thisDiscover = this;

    thisDiscover.item = item;

    thisDiscover.render();
    thisDiscover.randomSongs();
    thisDiscover.getData();
    thisDiscover.playerSongs();
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

    const testSong = thisDiscover.randomSong - 1;
    const rightSong = thisDiscover.songs[testSong];
    console.log('rightSong', rightSong);

  }

  playerSongs() {
    GreenAudioPlayer.init({
      selector: '.playerDiscover',
      stopOthersOnPlay: true
    });
  }
}

export default Discover;