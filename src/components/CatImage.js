import React from 'react';

const CatImage = props => {
  return (
    <img alt="leave me alone you annoying warning thing" className="cat--image" src={props.imgURL} />
  )
}

export default CatImage;
