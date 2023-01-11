import { select, settings } from './settings.js';
import Home from './components/Home.js';

const app = {
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
        thisApp.initHome();
      });
    console.log('thisApp.data', JSON.stringify(this.data));
    console.log('thisApp.data-1', thisApp.data);
  },

  initHome: function () {
    const thisApp = this;

    for (let song in thisApp.data.songs) {
      new Home(thisApp.data.songs[song]);
    }

    thisApp.initPlayer();

  },

  initPlayer: function () {

    GreenAudioPlayer.init({
      selector: select.player.player,
      stopOthersOnPlay: true
    });


  },

  init: function () {
    const thisApp = this;
    console.log('*** App starting ***');
    console.log('thisApp:', thisApp);


    thisApp.initData();
  },

};

app.init();