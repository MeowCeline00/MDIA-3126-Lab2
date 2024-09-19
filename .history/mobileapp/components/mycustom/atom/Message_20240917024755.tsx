import React from 'react';
import { Text as NativeText, View } from 'react-native';

export default function Message({ messageContent }) {
    return (
        <View>
            <NativeText
                style={{ color: 'black', fontSize: 10, fontWeight: '600' }}
            >
                {messageContent}
            </NativeText>
        </View>
    );
}
