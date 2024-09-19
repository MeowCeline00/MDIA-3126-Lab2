import React from 'react';

export default function PostImage({ imageUri }) {
  return (
    <div
      style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '1px solid skyblue',
      }}
    >
      <img
        src={imageUri}
        alt="Post"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>
  );
}
