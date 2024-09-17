import React from 'react';
import { View, Image } from 'react-native';

export default function PostImage({
    imageUri
}) {
    return (
        <View style={{
            width: 120,
            height: 120,
            borderRadius: 80,
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: 'skyblue',
        }}>
            <Image 
                source={{ uri: imageUri }} 
                style={{ width: '100%', height: '100%' }} 
            />
        </View>
    );
}
