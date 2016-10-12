import React from 'react';
import { convertAlbum, convertSong } from '../containers/AppContainer';



class Albums extends React.Component {

  componentDidMount () {
    this.props.loadAlbums();
  }

  render() {
    console.log(this.props.albums);
    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
          {
            this.props.albums.map(album => {
              return (
                <div className="col-xs-4">
                  <a className="thumbnail" href="#">
                    <img src={album.imageUrl}/>
                    <div className="caption">
                      <h5>
                        <span>{album.name}</span>
                      </h5>
                      <small>{album.songs.length}</small>
                    </div>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default Albums;
