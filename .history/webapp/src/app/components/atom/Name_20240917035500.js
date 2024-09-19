import React from 'react';

export default function Name({ nameTitle }) {
  return (
    <div
      style={{
        color: 'darkblue',
        fontSize: '16px',
        fontWeight: '800',
      }}
    >
      {nameTitle}
    </div>
  );
}
