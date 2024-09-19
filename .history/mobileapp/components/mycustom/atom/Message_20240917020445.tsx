import React from 'react';
import { Text as NativeText, View } from 'react-native';

export default function Name({ nameTitle }) {
    return (
        <View>
            <NativeText
                style={{ color: 'darkblue', fontSize: 18, fontWeight: 'bold' }}
            >
                {nameTitle}
            </NativeText>
        </View>
    );
}
