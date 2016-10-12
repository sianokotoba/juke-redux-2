import { connect } from 'react-redux';
import Albums from './Albums';
import { fetchAlbumsFromServer } from '../actions';

const mapStateToProps = ({ albums }) => ({
  albums
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadAlbums: () => dispatch(fetchAlbumsFromServer())
})

const AlbumConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
// this is where Albums gets { albums } and is able to call it 'this.props' within the Albums.js file.
// Additionally, any functions in the 'mapDispatchToProps' will also be available on the this.props. Similarly, anything from the state passed to 'mapStateToProps' will also be available on the this.props. The 'connect' function makes this happen

export default AlbumConnector;
