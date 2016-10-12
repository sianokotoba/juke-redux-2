import { connect } from 'react-redux';
import Albums from './Albums';


const mapStateToProps = ({ albums }) => ({
  albums
});


const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    // note that I'm using enhanced object method notation
    loadAlbums (albums) {
      dispatch({ type: VIEW_ALL_ALBUMS, albums: albums });
    }
  }
}

const AlbumConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);

export default AlbumConnector;
