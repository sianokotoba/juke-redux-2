import { connect } from 'react-redux';
import Albums from './Albums';
import { receiveAlbums } from '../actions';

const mapStateToProps = ({ albums }) => ({
  albums
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  view: () => dispatch(receiveAlbums())
})

const AlbumConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);

export default AlbumConnector;
