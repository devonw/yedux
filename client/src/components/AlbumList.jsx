import React from 'react';

const AlbumList = (props) => (
    <div>
      <h2>{props.album.era}</h2>
      <h4>{props.album.description}</h4>
      <h4>{props.album.year}</h4>
      <img src={props.album.imageUrl}/>
    </div>
  );

export default AlbumList;
