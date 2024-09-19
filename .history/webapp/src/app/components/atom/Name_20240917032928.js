import React from 'react';
import { Platform, Text as NativeText, View } from 'react-native';

export default function Name({ nameTitle }) {
    return (
        <View>
            <NativeText
                style={{
                    color: 'darkblue',
                    fontSize: 16,
                    fontWeight: '800',
                    ...(Platform.OS === 'web' && { padding: '10px' }) // Web-specific styles
                }}
            >
                {nameTitle}
            </NativeText>
        </View>
    );
}
