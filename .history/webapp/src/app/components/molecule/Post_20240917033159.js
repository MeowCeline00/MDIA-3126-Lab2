import React from 'react';
import { View, Platform } from 'react-native';
import PostImage from '@/components/mycustom/atom/PostImage'; 
import Message from '@/components/mycustom/atom/Message';
import Name from '@/components/mycustom/atom/Name';

export default function PostContent({ imageUri, nameTitle, messageContent }) {
    return (
        <View
            style={{
                flexDirection: "column",
                alignItems: "center",
                padding: Platform.OS === 'web' ? 30 : 20, 
                width: Platform.OS === 'web' ? '50%' : 'auto', 
                maxWidth: Platform.OS === 'web' ? '600px' : '100%', 
                borderWidth: Platform.OS === 'web' ? '2px' : 2, 
                borderColor: 'skyblue', // Same border color for both platforms
                borderRadius: 10, // Optionally round the corners for both platforms
            }}
        >
            <PostImage imageUri={imageUri} />
            <View style={{ marginTop: 10 }}>
                <Name
                    nameTitle={nameTitle}
                    style={{
                        borderWidth: 2,
                        borderColor: 'skyblue', 
                        padding: 7
                    }}
                />
            </View>
            <View style={{ marginTop: 10 }}>
                <Message messageContent={messageContent} />
            </View>
        </View>
    );
}
