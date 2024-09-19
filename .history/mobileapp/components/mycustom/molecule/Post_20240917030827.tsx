import React from 'react';
import { View } from 'react-native';
import PostImage from '@/components/mycustom/atom/PostImage'; 
import Message from '@/components/mycustom/atom/Message';
import Name from '@/components/mycustom/atom/Name';

export default function PostContent({ imageUri, nameTitle, messageContent }) {
    return (
        <View
            style={{
                flexDirection: "column",
                alignItems: "center",
                padding: 20,
                borderWidth: 1;
                borderColor: ""
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
