import React from 'react';

export default function Message({ messageContent }) {
  return (
    <div
      style={{
        color: 'black',
        fontSize: '14px',
        fontWeight: '600',
        textAlign: 'left',
      }}
    >
      {messageContent}
    </div>
  );
}
