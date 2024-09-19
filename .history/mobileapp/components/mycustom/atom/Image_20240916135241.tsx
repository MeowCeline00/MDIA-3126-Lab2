import React from 'react';
import { View, Image } from 'react-native';

interface PostImageProps {
    imageUri: string;
}

export default function PostImage({
    imageUri
}: PostImageProps) {
    return (
        <View style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            overflow: 'hidden', 
        }}>
            <Image 
                source={{ uri: imageUri }} 
                style={{ width: '100%', height: '100%' }} 
            />
        </View>
    );
}
