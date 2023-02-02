import { select, settings, classNames } from './settings.js';
import Song from './components/Song.js';
import Search from './components/Search.js';
import Discover from './components/Discover.js';
import Home from './components/Home.js';
import Subscribe from './components/Subscribe.js';
import CategoryFilter from './components/CategoryFilter.js';

const app = {

  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;

    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }


    thisApp.activatePage(pageMatchingHash);


    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');
        thisApp.activatePage(id);
        if (id == 'discover') {
          console.log('page.id', id);
          thisApp.initDiscover();
        }

        window.location.hash = '#/' + id;
      });
    }

  },

  activatePage: function (pageId) {
    const thisApp = this;

    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    for (let link of thisApp.navLinks) {
      link.classList.toggle(classNames.nav.active, link.getAttribute('href') == '#' + pageId);
    }
  },

  initData: function () {
    const thisApp = this;

    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.songs;


    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        console.log('parsedResponse', parsedResponse);
        thisApp.data.songs = parsedResponse;
        thisApp.initSong();
        // thisApp.initDiscover();
        thisApp.initPlayer();
        thisApp.initSongsPlayed();
        thisApp.initCategoryFilter();
        thisApp.initSearch();
      });
  },

  initSong: function () {
    const thisApp = this;

    const mainPageContainer = document.querySelector(select.containerOf.mainPageSongs);
    const searchPageContainer = document.querySelector(select.containerOf.searchPageSongs);
    const discoverContainer = document.querySelector(select.containerOf.discoverPage);
    for (let song of thisApp.data.songs) {
      new Song(song, mainPageContainer);
      new Song(song, searchPageContainer);
      new Song(song, discoverContainer);
    }
  },

  initCategoryFilter: function () {
    const thisApp = this;

    const categoryFilterContainer = document.querySelector(select.containerOf.categoryFilterHome);

    thisApp.Home = new CategoryFilter(categoryFilterContainer, thisApp.data.songs);

  },

  initHome: function () {
    const thisApp = this;

    const homeContainer = document.querySelector(select.containerOf.mainPageSubscribe);

    thisApp.Home = new Home(homeContainer);
  },

  initSearch: function () {
    const thisApp = this;

    const searchContainer = document.querySelector(select.containerOf.searchPage);

    thisApp.search = new Search(searchContainer, thisApp.data.songs);

  },

  initDiscover: function () {
    const thisApp = this;

    const discoverContainer = document.querySelector(select.containerOf.discoverPage);
    thisApp.discover = new Discover(discoverContainer, thisApp.data.songs, thisApp.categoryPlayed);

  },

  initSubscribe: function () {
    const thisApp = this;

    const subscribeContainer = document.querySelector(select.containerOf.subscribeWrapperPage);

    thisApp.Home = new Subscribe(subscribeContainer);

  },

  initPlayer: function () {

    GreenAudioPlayer.init({
      selector: select.player.player,
      stopOthersOnPlay: true
    });

  },

  initSongsPlayed: function () {
    const thisApp = this;

    thisApp.songsPlayed = [];
    thisApp.categoryPlayed = [];

    const listenSongs = document.querySelectorAll(select.player.audioPlayer);
    const songsWrapper = document.querySelectorAll(select.containerOf.songsWrapperMainPage);
    console.log('songsWrapper', songsWrapper);
    for (let song of listenSongs) {
      song.addEventListener('play', function () {
        console.log('song', song);
        console.log('działa!');
        const pathSrcFile = song.getAttribute('src');
        const fileName = pathSrcFile.split('/').pop();
        thisApp.songsPlayed.push(fileName);

        for (let item of songsWrapper) {
          console.log('item', item);
          const pathToSong = item.children[1].children['player-song'].src;
          console.log('pathToSong', pathToSong);
          const songName = pathToSong.split('/').pop();
          console.log('songName', songName);
          if (fileName == songName) {
            console.log('songName', songName);
            const itemCategories = item.children[2].innerText;
            const categories = itemCategories.split(':')[1].split(',');
            thisApp.categoryPlayed = thisApp.categoryPlayed.concat(categories);
          }
        }
        console.log('thisApp.songsPlayed', thisApp.songsPlayed);
        console.log('thisApp.categoryPlayed', thisApp.categoryPlayed);
      });

    }
  },

  init: function () {
    const thisApp = this;

    thisApp.initPages();

    thisApp.initData();
    thisApp.initHome();
    thisApp.initSubscribe();

  },

};

app.init();