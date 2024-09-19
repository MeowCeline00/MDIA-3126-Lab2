import React from 'react';
import { Text as NativeText, View } from 'react-native';
import Image from "@/components/atoms/Image";
import Message from "@/components/atoms/Message";
import Name from "@/components/atoms/Name";

export default function post({ labelText, buttonTitle, placeholderText, placeholderTextColor }) {
    return (
        <View
            style={{
                flexDirection:"row",
                gap: 5,
                alignItems:"center"
            }}
        >
            <Label labelText={labelText} />
            <TextInput 
                style={{
                    border:"1px solid #000"
                }}
                placeholder={placeholderText}
                placeholderTextColor={placeholderTextColor}
            />
            <Button buttonTitle={buttonTitle} />
        </View>
    )
}