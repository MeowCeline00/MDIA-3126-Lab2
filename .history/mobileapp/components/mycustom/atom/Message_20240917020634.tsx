import React from 'react';
import { Text as NativeText, View } from 'react-native';

export default function Message({ messageContent }) {
    return (
        <View>
            <NativeText
                style={{ color: 'black', fontSize: 16, fontWeight: 'regular' }}
            >
                {messageContent}
            </NativeText>
        </View>
    );
}
