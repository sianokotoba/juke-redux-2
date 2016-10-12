import {createStore, combineReducers} from 'redux';
import initialState from './initialState';

const store = createStore(reducer, initialState);



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

console.log(initialState.albums);
console.log(store.getState());
console.log(store.dispatch({type: VIEW_ALL_ALBUMS, albums: ["this is an album"]}));
console.log(store.getState());


export default store;








// curly only for methods ES6!!
