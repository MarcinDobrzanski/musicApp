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
        thisApp.data.songs = parsedResponse;
        thisApp.initSong();
        thisApp.initPlayerMainPage();
        thisApp.initSongsPlayed();
        thisApp.initCategoryFilter();
        thisApp.initSearch();
        thisApp.initDiscover();
        thisApp.initChangeText();
      });
  },

  initSong: function () {
    const thisApp = this;

    const container = document.querySelector(select.containerOf.mainPageSongs);


    for (let song of thisApp.data.songs) {
      new Song(song, container);
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

    GreenAudioPlayer.init({
      selector: select.player.playerDiscover,
      stopOthersOnPlay: true
    });

  },

  initSubscribe: function () {
    const thisApp = this;

    const subscribeContainer = document.querySelector(select.containerOf.subscribeWrapperPage);

    thisApp.Home = new Subscribe(subscribeContainer);

  },

  initPlayerMainPage: function () {

    GreenAudioPlayer.init({
      selector: select.player.player,
      stopOthersOnPlay: true
    });

  },

  initSongsPlayed: function () {
    const thisApp = this;

    thisApp.categoryPlayed = [];

    const listenSongs = document.querySelectorAll(select.player.audioPlayer);
    for (let song of listenSongs) {
      song.addEventListener('play', function () {
        const songCategory = song.getAttribute(select.songs.songsCategories);
        const categories = songCategory.split(',');
        thisApp.categoryPlayed = thisApp.categoryPlayed.concat(categories);
      });

    }
  },

  initChangeText() {
    const thisApp = this;

    thisApp.joinNowButton = document.querySelector(select.forms.toUpperCase);
    thisApp.searchBtn = document.querySelector(select.forms.btnSearch);
    thisApp.categoryText = document.querySelectorAll(select.containerOf.categoryText);

    thisApp.joinNowButton.textContent = thisApp.joinNowButton.textContent.toUpperCase();
    thisApp.searchBtn.value = thisApp.searchBtn.value.toUpperCase();

    for (let text of thisApp.categoryText) {
      const splitText = text.innerHTML.split(',');
      const joinedText = splitText.join(', ');
      text.innerHTML = joinedText;
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