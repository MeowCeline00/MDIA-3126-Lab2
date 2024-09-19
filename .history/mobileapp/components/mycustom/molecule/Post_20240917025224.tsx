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
                borderWidth: 2,
                borderColor: 'black',
            }}
        >
            <PostImage imageUri={imageUri} />
            <View style={{ marginTop: 10 }}>
                <Name
                    nameTitle={nameTitle}
                    style={{
                        borderWidth: 1,
                        borderColor: "red",
                        padding: 5
                    }}
                />
            </View>
            <View style={{ marginTop: 10 }}>
                <Message messageContent={messageContent} />
            </View>
        </View>
    );
}
