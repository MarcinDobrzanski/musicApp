import { select, settings, classNames } from '../settings.js';

class Discover {
  constructor(item, songs, categories) {
    const thisDiscover = this;

    thisDiscover.item = item;
    thisDiscover.songs = songs;
    thisDiscover.categoryPlayed = categories;

    thisDiscover.mostPlayedCategory();
    thisDiscover.songArray();
    thisDiscover.randomNumber();
    thisDiscover.suggestedSong();

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
    console.log('thisDiscover.mostPopularCategory', thisDiscover.mostPopularCategory);
  }

  songArray() {
    const thisDiscover = this;

    thisDiscover.songsArray = [];

    thisDiscover.discoverSong = document.querySelectorAll(select.containerOf.discoverSongWrapper);
    for (let song of thisDiscover.discoverSong) {
      const songCategory = song.children[0].children[2].innerText;
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

  suggestedSong() {
    const thisDiscover = this;

    const foundSong = thisDiscover.randomNumber - 1;
    let rightSong = thisDiscover.songs[foundSong];

    if (thisDiscover.songsArray.length > 0) {
      rightSong = thisDiscover.songsArray[foundSong];
    }
    thisDiscover.rightSong = rightSong;
    console.log('rightSong', rightSong);

    for (let song of thisDiscover.discoverSong) {
      song.classList.remove(classNames.pages.active);
      if (song == thisDiscover.rightSong) {
        console.log('song5', song);
        song.classList.add(classNames.pages.active);
      }
    }
  }

}

export default Discover;