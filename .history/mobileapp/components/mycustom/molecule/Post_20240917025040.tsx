import React from 'react';
import { Text as NativeText, View } from 'react-native';
import PostImage from '@/components/mycustom/atom/PostImage'; 
import Message from '@/components/mycustom/atom/Message';
import Name from '@/components/mycustom/atom/Name';

export default function PostContent({ imageUri, nameTitle, messageContent }) {
    return (
        <View
            style={{
                flexDirection: "column",
                gap: 10,
                alignItems: "center",
                padding: 20,
                border: 2
            }}
        >
            <PostImage imageUri={imageUri} />
            <Name
                nameTitle={nameTitle}
                style={{
                    borderWidth: 2,
                    borderColor: "#ccc",
                    padding: 5
                }}
            />
            <Message messageContent={messageContent} />
        </View>
    );
}
