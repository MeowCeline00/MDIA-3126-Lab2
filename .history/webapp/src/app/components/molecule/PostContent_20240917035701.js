import React from 'react';
import PostImage from '../atom/PostImage'; 
import Message from '../atom/Message';
import Name from '../atom/Name';

export default function PostContent({ imageUri, nameTitle, messageContent }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        maxWidth: '600px',
        border: '2px solid skyblue',
        borderRadius: '10px',
        margin: '0 auto',
      }}
    >
      <PostImage imageUri={imageUri} />
      <div style={{ marginTop: '10px' }}>
        <Name
          nameTitle={nameTitle}
          style={{
            padding: '7px',
          }}
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Message messageContent={messageContent} />
      </div>
    </div>
  );
}
