import React from 'react';

const GifItem = img => {
  const imageUrl = img.gif.images.downsized.url;
  return (
    <div className="gif--img-container">
      <img alt="gif" className="gif--img" src={imageUrl} />
    </div>
  )
};

export default GifItem;
