import React from 'react';
import { Text as NativeText, View, Platform } from 'react-native';

export default function Message({ messageContent }) {
  return (
    <View>
      <NativeText
        style={{
          color: 'black',
          fontSize: 14,
          fontWeight: '600',
          textAlign: 'left',
          ...(Platform.OS === 'web' && { padding: '10px' }) // Additional styling for web
        }}
      >
        {messageContent}
      </NativeText>
    </View>
  );
}
