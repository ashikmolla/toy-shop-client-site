// ChatGpt.js

import React, { useState } from 'react';

const ChatGpt = () => {
  const images = [
    'https://placekitten.com/300/200',
    'https://placekitten.com/301/200',
    'https://placekitten.com/302/200',
    'https://placekitten.com/303/200',
    // Add more images as needed
  ];

  const [hoveredImage, setHoveredImage] = useState(null);

  const handleThumbnailHover = (index) => {
    setHoveredImage(images[index]);
  };

  const handleThumbnailLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div>
      <h2>ChatGpt</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <img src={hoveredImage || images[0]} alt="hovered slide" style={{ maxWidth: '100%', border: '2px solid red' }} />
        </div>
      </div>

      <div>
        <div>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`thumbnail ${index}`}
              style={{ width: '50px', margin: '5px', cursor: 'pointer', border: hoveredImage === image ? '2px solid red' : 'none' }}
              onMouseEnter={() => handleThumbnailHover(index)}
              onMouseLeave={handleThumbnailLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatGpt;
