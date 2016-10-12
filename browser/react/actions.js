import { createStore, combineReducers, applyMiddleware } from 'redux';
import initialState from './initialState';
import createLogger from 'redux-logger';
import {convertAlbum} from './containers/AppContainer'
import thunkMiddleware from 'redux-thunk';

export const GET_ALL_SONGS = 'GET_ALL_SONGS';
export const ADD_SONG = 'ADD_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const PAUSE_SONG = 'PAUSE_SONG';
export const NEXT_SONG = 'NEXT_SONG';
export const PREV_SONG = 'PREV_SONG';
export const SWITCH_ALBUM = 'SWITCH_ALBUM';
export const VIEW_ALL_ALBUMS = 'VIEW_ALL_ALBUMS';
export const STOP_SONG = 'STOP_SONG';
export const PLAY_SONG = 'PLAY_SONG';
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';

export const playSongType = () => ({type: PLAY_SONG});
export const stopSong = () => ({type: STOP_SONG});

export const setCurrentSong = () => (currentSong, currentSongList) => ({
  type: SET_CURRENT_SONG,
  currentSong,
  currentSongList
});

export const getAllSongs = function(songs) {
  return {type: GET_ALL_SONGS, songs}
}

export const receiveAlbums = function (albums) {
  return { type: VIEW_ALL_ALBUMS, albums }
};

export const fetchAlbumsFromServer = () => dispatch => {
    fetch('/api/albums')
      .then(res => res.json())
      // use the dispatch method the thunkMiddleware gave us
      .then(albums => {
          albums.forEach(album => {
            convertAlbum(album)
          })
          dispatch(receiveAlbums(albums));
      })
}

export const play = () => dispatch => {
  AUDIO.play();
  dispatch(startPlaying());
};

export const pause = () => dispatch => {
  AUDIO.pause();
  dispatch(stopPlaying());
};

export const load = (currentSong, currentSongList) => dispatch => {
  AUDIO.src = currentSong.audioUrl;
  AUDIO.load();
  dispatch(setCurrentSong(currentSong, currentSongList));
};

export const startSong = (song, list) => dispatch => {
  dispatch(pause());
  dispatch(load(song, list));
  dispatch(play());
};

export const toggle = () => (dispatch, getState) => {
  const { isPlaying } = getState();
  if (isPlaying) dispatch(pause());
  else dispatch(play());
};

export const toggleOne = (selectedSong, selectedSongList) =>
  (dispatch, getState) => {
    const { currentSong } = getState();
    if (selectedSong.id !== currentSong.id)
      dispatch(startSong(selectedSong, selectedSongList));
    else dispatch(toggle());
};


function albumsReducer (state = [], action) {
  switch (action.type) {
    case VIEW_ALL_ALBUMS:
      return action.albums;
    default: return state;
  }
}

function songsReducer (state = {}, action) {
  switch (action.type) {
    case GET_ALL_SONGS:
      return action.album;
    default: return state;
  }
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

const rootReducer = combineReducers({
  albums: albumsReducer,
  songs: songsReducer
})


// Used to log the state, and state changes
const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

export default store;

