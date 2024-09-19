import React from 'react';
import { View, Image, Platform } from 'react-native';

export default function PostImage({ imageUri }) {
    return (
        <View
            style={{
                width: 120,
                height: 120,
                borderRadius: Platform.OS === 'web' ? '50%' : 80, 
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: 'skyblue',
                ...(Platform.OS === 'web' && { objectFit: 'cover' }) // Additional web-specific style for image fitting
            }}
        >
            <Image
                source={{ uri: imageUri }}
                style={{
                    width: '100%',
                    height: '100%',
                    ...(Platform.OS === 'web' && { objectFit: 'cover' }), // Ensure image is well-fitted for web
                }}
            />
        </View>
    );
}
