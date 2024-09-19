import React from 'react';
import { View, Image } from 'react-native';

export default function PostImage({
    imageUri
}) {
    return (
        <View style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            overflow: 'hidden', 
        }}>
            <Image 
                source={{ uri: imageUri }} 
                style={{ width: '100%', height: '100%' }} 
            />
        </View>
    );
}