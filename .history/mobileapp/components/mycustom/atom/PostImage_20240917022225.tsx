import React from 'react';
import { View, Image } from 'react-native';

export default function PostImage({
    imageUri
}) {
    return (
        <View style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            overflow: 'hidden', 
        }}>
            <PostImage
                source={{ uri: imageUri }} 
                style={{ width: '100%', height: '100%' }} 
            />
        </View>
    );
}
