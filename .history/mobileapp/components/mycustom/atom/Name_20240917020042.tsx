import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Name({ nameText }) {
    return (
        <View>
            <Text style={styles.nameStyle}>
                {nameText}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    nameStyle: {
        color: 'darkblue',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
