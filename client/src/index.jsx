import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import data from './dummy_data.js';
import AlbumList from './components/AlbumList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
    var getAlbums = function() {
      $.get('http://localhost:3000/api/albums', function(data){
        this.setState({albums: data});
        console.log(this.state.albums);
      }.bind(this))
    }.bind(this)
    getAlbums();
  }

  render() {
    return (
      <div>
        <h1>Yedux</h1>
        {
        this.state.albums.map(album =>
          <AlbumList album={album}/>)
      }
   
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
