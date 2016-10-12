import { connect } from 'react-redux';
import AppContainer from './AppContainer';
import { fetchAlbumsFromServer, play, pause, load, startSong, toggle, toggleOne } from '../actions';


const mapStateToProps = ({ album, artists, songs}) => ({
  album,
  artists,
  songs
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadAlbums: () => dispatch(fetchAlbumsFromServer()),
  playSong: () => dispatch(play()),
  pauseSong: () => dispatch(pause()),
  loadSong: () => dispatch(load()),
  startSong: () => dispatch(startSong()),
  toggleSong: () => dispatch(toggle()),
  toggleOne: () => dispatch(toggleOne())
})

const AppConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);

// this is where Albums gets { albums } and is able to call it 'this.props' within the Albums.js file.
// Additionally, any functions in the 'mapDispatchToProps' will also be available on the this.props. Similarly, anything from the state passed to 'mapStateToProps' will also be available on the this.props. The 'connect' function makes this happen

export default AppConnector;
