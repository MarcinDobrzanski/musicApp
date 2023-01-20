export const select = {
  templateOf: {
    mainPageSongs: '#template-main-page-songs',
    mainPageSubscribe: '#template-main-page-subscribe',
    searchPage: '#template-search-page',
    discoverPage: '#template-discover-page',
    subscribePage: '#template-join-now-page',
  },
  containerOf: {
    mainPageSongs: '.mainPage-container',
    searchPageSongs: '.searchPage-container',
    mainPageSubscribe: '.mainPage-subscribe',
    subscribeWrapperPage: '.join-now-wrapper',
    pages: '#pages',
    searchPage: '#search-box',
    discoverPage: '.discover-wrapper',
    subscribePage: '.join-now__wrapper',
    songsWrapper: '.songs__wrapper--song',
    songsDiscoverWrapper: '.songs__wrapper-discover',
    songsSearchWrapper: '.searchPage-container',
    songSearchWrapper: '.searchPage-container .songs__wrapper',
  },
  player: {
    player: '.player',
    playerWrapper: '.songs__wrapper',
    playerDiscover: '.playerDiscover',
  },
  nav: {
    links: '.main-nav a',
    navWrapper: '.main-nav',
  },
  forms: {
    inputPlaceholder: '#search-song',
    input: '#submit-search',
    button: '.search-form button',
    subscribeButton: '.subscribe__button',
  },
  search: {
    qtySearch: '#qtySearchResult',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
    hide: 'hidden',
  },
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
  mainPageSongs: Handlebars.compile(document.querySelector(select.templateOf.mainPageSongs).innerHTML),
  mainPageSubscribe: Handlebars.compile(document.querySelector(select.templateOf.mainPageSubscribe).innerHTML),
  searchPage: Handlebars.compile(document.querySelector(select.templateOf.searchPage).innerHTML),
  discoverPage: Handlebars.compile(document.querySelector(select.templateOf.discoverPage).innerHTML),
  subscribePage: Handlebars.compile(document.querySelector(select.templateOf.subscribePage).innerHTML),
};