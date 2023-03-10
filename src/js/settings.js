export const select = {
  templateOf: {
    mainPageSongs: '#template-main-page-songs',
    mainPageSubscribe: '#template-main-page-subscribe',
    searchPage: '#template-search-page',
    searchPageSongs: '#template-search-song',
    discoverPage: '#template-discover-page',
    subscribePage: '#template-join-now-page',
    categoryFilter: '#template-categoryFilter',
  },
  containerOf: {
    mainPageSongs: '.mainPage-container',
    searchPageSongs: '.searchPage-container',
    mainPageSubscribe: '.mainPage-subscribe',
    categoryFilterHome: '.mainPage-categoryFilter',
    subscribeWrapperPage: '.join-now-wrapper',
    pages: '#pages',
    searchPage: '#search-box',
    discoverPage: '.discover-wrapper',
    discoverSongWrapper: '.discover-wrapper .songs__wrapper',
    subscribePage: '.join-now__wrapper',
    songsWrapper: '.songs__wrapper--song',
    songsWrapperMainPage: '.mainPage-container .songs__wrapper--song',
    songsDiscoverWrapper: '.songs__wrapper-discover',
    songSearchWrapper: '.searchPage-container .songs__wrapper',
    songMainPageWrapper: '.mainPage-container .songs__wrapper',
    filterWrapper: '.category-filter__wrapper--text .category_list',
    categoryText: '.songs__categories__fill p',
  },
  player: {
    player: '.player',
    playerWrapper: '.songs__wrapper',
    playerDiscover: '.player-discover',
    playerSearch: '.player-search',
    audioPlayer: '.mainPage-container #player-song',
  },
  nav: {
    links: '.main-nav a',
    navWrapper: '.main-nav',
  },
  songs: {
    idSong: 'data-idSong',
    songsCategories: 'data-categories',
    songCategory: '.songs__categories__fill p',
  },
  forms: {
    inputPlaceholder: '#search-song',
    selectCategories: '#categories-select',
    input: '#submit-search',
    button: '.search-form button',
    subscribeButton: '.subscribe__button',
    searchCategories: '#categories-select',
    selectDefault: 'default',
    toUpperCase: '#toUpperCase',
    btnSearch: '#submit-search',
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
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
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
  searchSongs: Handlebars.compile(document.querySelector(select.templateOf.searchPageSongs).innerHTML),
  discoverPage: Handlebars.compile(document.querySelector(select.templateOf.discoverPage).innerHTML),
  subscribePage: Handlebars.compile(document.querySelector(select.templateOf.subscribePage).innerHTML),
  categoryFilter: Handlebars.compile(document.querySelector(select.templateOf.categoryFilter).innerHTML),
};