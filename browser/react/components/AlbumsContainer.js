import store from './actions';

import { connect } from 'react-redux';


const mapStateToProps = ({ albums }) => ({
  albums.name,
  albums.artists,
  albums.songs
});


const mapDispatchToProps = () => ({

});

const AlbumConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)();

export default AlbumConnector;
