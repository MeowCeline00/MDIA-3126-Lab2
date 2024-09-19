import React from 'react';
import { Text as NativeText, View } from 'react-native';
import Image from '@/components/atoms/PostImage'; // Make sure this is the correct path to your PostImage component
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
            <Image imageUri={imageUri} />
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
