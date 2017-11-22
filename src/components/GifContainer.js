import React from 'react';
import Gif from './Gif';

const GifContainer = props => {
  const items = props.gifs.map(img => {
    return <Gif key={img.id} gif={img}/>
  });

  return (
    <div className="results--container">
      {props.value.length >= 1 &&
        <h1 className="text-center">Showing results for {props.value} </h1>
      }
      <div className="gif--container">{items}</div>
    </div>
  );
}

export default GifContainer;
