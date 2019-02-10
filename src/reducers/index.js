import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '03:00'},
    { title: 'Macarena', duration: '04:30'},
    { title: 'All Star', duration: '05:02'},
    { title: 'I Want it That Way', duration: '02:55'}
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if(action.type === 'SONG_SELECTED')
    return action.payload

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});