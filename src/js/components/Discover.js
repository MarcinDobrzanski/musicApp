import { select, settings, templates } from '../settings.js';
import utils from '../utils.js';

class Discover {
  constructor(item, songs, categories) {
    const thisDiscover = this;

    thisDiscover.item = item;
    thisDiscover.songs = songs;
    thisDiscover.categoryPlayed = categories;

    thisDiscover.calculateMostPlayedCategory();
    thisDiscover.getSongsWithPopularCategory();
    thisDiscover.randomNumber();
    thisDiscover.suggestedSong();
    thisDiscover.render();

  }

  calculateMostPlayedCategory() {
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

  getSongsWithPopularCategory() {
    const thisDiscover = this;

    thisDiscover.songsArray = [];

    for (let song of thisDiscover.songs) {
      const songCategory = song.categories;
      if (songCategory.indexOf(thisDiscover.mostPopularCategory) > -1) {
        thisDiscover.songsArray.push(song);
      }
    }
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
  }

  suggestedSong() {
    const thisDiscover = this;

    const foundSong = thisDiscover.randomNumber - 1;
    thisDiscover.rightSong = thisDiscover.songs[foundSong];

    if (thisDiscover.songsArray.length === 0 ) {
      thisDiscover.rightSong = thisDiscover.songs[foundSong];
    } else {
      thisDiscover.rightSong = thisDiscover.songsArray[foundSong];
    }
  }

  render() {
    const thisDiscover = this;

    const generatedHTML = templates.discoverPage(thisDiscover.rightSong);
    thisDiscover.element = utils.createDOMFromHTML(generatedHTML);
    const discoverContainer = document.querySelector(select.containerOf.discoverPage);

    while (discoverContainer.firstChild) {
      discoverContainer.removeChild(discoverContainer.firstChild);
    }
    discoverContainer.appendChild(thisDiscover.element);
  }

}

export default Discover;