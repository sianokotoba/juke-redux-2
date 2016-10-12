import { createStore, combineReducers, applyMiddleware } from 'redux';
import initialState from './initialState';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const ADD_SONG = 'ADD_SONG';
const REMOVE_SONG = 'REMOVE_SONG';
const PLAY_SONG = 'PLAY_SONG';
const PAUSE_SONG = 'PAUSE_SONG';
const NEXT_SONG = 'NEXT_SONG';
const PREV_SONG = 'PREV_SONG';
const SWITCH_ALBUM = 'SWITCH_ALBUM';
const VIEW_ALL_ALBUMS = 'VIEW_ALL_ALBUMS';

function reducer (state = initialState, action) {
  switch (action.type) {
    case VIEW_ALL_ALBUMS:
      return Object.assign({}, state, {albums: action.albums});
    default: return state;
  }
}

export const receiveAlbums = function (albums) {
  return { type: VIEW_ALL_ALBUMS, albums }
};

export const fetchAlbumsFromServer = () => dispatch => {
    fetch('/api/albums')
      .then(res => res.json())
      // use the dispatch method the thunkMiddleware gave us
      .then(albums => dispatch(receiveAlbums(albums)))
}


export const playSong = songId => {
  return dispatch => {
    // side effects, like using the audio element belong in async action creators too, even if they aren't "async"
    audio.play()
    dispatch(selectSong(songId));
  }
}

export const doSeveralThings = (stuffId, thingsId) => {
  return dispatch => {
    // we can also use async action creators to compose several actions into one!
    dispatch(doStuff(stuffId));
    dispatch(doThing(thingId));
  }
}

const logger = createLogger();
// console.log(logger)
const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

export default store;








// curly only for methods ES6!!
