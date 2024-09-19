import React from 'react';
import { Platform, TextInput, View } from 'react-native';

export default function Message({ messageText }) {
  return (
    <View>
      {Platform.OS === 'web' ? (
        <input
          type="text"
          value={messageText}
          style={{
            color: 'black',
            fontSize: 14,
            fontWeight: '600',
            textAlign: 'left',
            padding: 5,
            borderRadius: 4,
            border: '1px solid grey',
          }}
        />
      ) : (
        <TextInput
          value={messageText}
          style={{
            color: 'black',
            fontSize: 14,
            fontWeight: '600',
            textAlign: 'left',
            padding: 5,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: 'grey',
          }}
        />
      )}
    </View>
  );
}
