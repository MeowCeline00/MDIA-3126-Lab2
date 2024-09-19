import React from 'react';
import { Text as NativeText, View } from 'react-native';
import PostImage from '@/components/mycustom/PostImage'; 
import Message from '@/components/mycustom/atom/';
import Name from '@/components/atom/Name';

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
