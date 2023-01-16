export const select = {
  templateOf: {
    mainPage: '#template-main-page', 
    searchPage: '#template-search-page', 
    discoverPage: '#template-discover-page', 
  },
  containerOf: {
    mainPage: '.mainPage-container',
    pages: '#pages',
    searchPage: '#search-box',
    discoverPage: '.discover-wrapper',
    songsWrapper: '.songs__wrapper--song',
    songsDiscoverWrapper: '.songs__wrapper-discover',
    songsSearchWrapper: '.songs__wrapper-search',
  },
  player: {
    player: '.player',
    playerWrapper: '.songs__wrapper',
    playerDiscover: '.playerDiscover',
  },
  nav: {
    links: '.main-nav a',
    navWrapper: '.main-nav',
  }
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  }
};

export const settings = {
  songs: {
    min: 1,
    max: 4,
  },
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    songs: 'songs',
    id: 'id',
    title: 'title',
    author: 'author',
    songsFilename: 'filename',
    songsCategories: 'categories',
    songsRanking: 'ranking',
  },
};

export const templates = {
  mainPage: Handlebars.compile(document.querySelector(select.templateOf.mainPage).innerHTML),
  searchPage: Handlebars.compile(document.querySelector(select.templateOf.searchPage).innerHTML),
  discoverPage: Handlebars.compile(document.querySelector(select.templateOf.discoverPage).innerHTML),
};