import { templates, select, settings } from '../settings.js';
import utils from '../utils.js';

class Discover {
  constructor(item, songs, categories) {
    const thisDiscover = this;

    thisDiscover.item = item;
    thisDiscover.songs = songs;
    thisDiscover.categoryPlayed = categories;

    thisDiscover.mostPlayedCategory();
    thisDiscover.songArray();
    thisDiscover.randomNumber();
    thisDiscover.getSongs();
    thisDiscover.suggestedSong();
    // thisDiscover.render();

  }

  mostPlayedCategory() {
    const thisDiscover = this;

    const categories = thisDiscover.categoryPlayed;
    const frequency = {};
    for (let i = 0; i < categories.length; i++) {
      const category = categories[i].trim();
      if (!frequency[category]) {
        frequency[category] = 0;
      }
      frequency[category]++;
    }

    let mostFrequentCategory = '';
    let maxFrequency = 0;
    for (let category in frequency) {
      if (frequency[category] > maxFrequency) {
        maxFrequency = frequency[category];
        mostFrequentCategory = category;
      }
    }

    thisDiscover.mostPopularCategory = mostFrequentCategory;
  }

  songArray() {
    const thisDiscover = this;

    thisDiscover.songsArray = [];

    thisDiscover.discoverSong = document.querySelectorAll(select.containerOf.discoverSongWrapper);
    console.log('thisDiscover.discoverSong1', thisDiscover.discoverSong);
    for (let song of thisDiscover.discoverSong) {
      console.log('song1', song);
      const songCategory = song.children[0].children[2].innerText;
      console.log('songCategory', songCategory);
      if (songCategory.indexOf(thisDiscover.mostPopularCategory) > -1) {
        thisDiscover.songsArray.push(song);
      }
    }
    console.log('thisDiscover.songsArray', thisDiscover.songsArray);
  }

  randomNumber() {
    const thisDiscover = this;

    let min = settings.songs.min;
    let max = thisDiscover.songs.length;

    if (thisDiscover.songsArray.length > 0) {
      max = thisDiscover.songsArray.length;
    }

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

  suggestedSong() {
    const thisDiscover = this;

    for (let song of thisDiscover.discoverSong) {
      console.log('song', song);
    }
  }

}

export default Discover;