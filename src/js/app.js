import { select, settings, classNames } from './settings.js';
import Song from './components/Song.js';
import Search from './components/Search.js';
import Discover from './components/Discover.js';
import Home from './components/Home.js';

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
        thisApp.initSearch();
        thisApp.initDiscover();
        thisApp.initPlayer();
      });
    console.log('thisApp.data', JSON.stringify(this.data));
    console.log('thisApp.data-1', thisApp.data);
  },

  initSong: function () {
    const thisApp = this;

    const mainPageContainer = document.querySelector(select.containerOf.mainPageSongs);
    const searchPageContainer = document.querySelector(select.containerOf.searchPageSongs);
    for (let song of thisApp.data.songs) {
      new Song(song, mainPageContainer);
      new Song(song, searchPageContainer);
    }
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
    thisApp.discover = new Discover(discoverContainer, thisApp.data.songs);

  },

  initPlayer: function () {

    GreenAudioPlayer.init({
      selector: select.player.player,
      stopOthersOnPlay: true
    });

  },

  init: function () {
    const thisApp = this;

    thisApp.initPages();

    thisApp.initData();
    thisApp.initHome();

  },

};

app.init();