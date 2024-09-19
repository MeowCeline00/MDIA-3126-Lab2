import React from 'react';
import { Text as NativeText, View } from 'react-native';
import PostImage from '@/components/atom/PostImage'; 
import Message from '@/components/atoms/Message';
import Name from '@/components/atoms/Name';

export default function PostContent({ imageUri, nameTitle, messageContent }) {
    return (
        <View
            style={{
                flexDirection: "row",
                gap: 5,
                alignItems: "center"
            }}
        >
            <PostImage imageUri={imageUri} />
            <Name
                nameTitle={nameTitle}
                style={{
                    borderWidth: 1,
                    borderColor: "#000",
                    padding: 5
                }}
            />
            <Message messageContent={messageContent} />
        </View>
    );
}
