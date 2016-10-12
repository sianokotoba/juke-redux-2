import React from 'react';
import { convertAlbum, convertSong } from '../containers/AppContainer';
import { fetchAlbumsFromServer } from '../actions';


class Albums extends React.Component {

  componentDidMount () {
   fetchAlbumsFromServer();
  }

  render() {
    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
          <div className="col-xs-4">
            <a className="thumbnail" href="#">
              <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMoneIMAGE&w=300&h=300" />
              <div className="caption">
                <h5>
                  <span>ALBUM 1 NAME</span>
                </h5>
                <small>NUMBER OF SONGS HERE songs</small>
              </div>
            </a>
          </div>
          <div className="col-xs-4">
            <a className="thumbnail" href="#">
              <img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMtwoIMAGE&w=300&h=300" />
              <div className="caption">
                <h5>
                  <span>ALBUM TWO NAME HERE</span>
                </h5>
                <small>NUMBER OF SONGS HERE songs</small>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Albums;
