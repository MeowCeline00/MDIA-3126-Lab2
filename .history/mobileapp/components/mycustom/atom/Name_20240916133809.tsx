import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface PostName {
  name: string;
}

const Name: React.FC<Name> = ({ name }) => {
  return <Text style={styles.name}>{name}</Text>;
};

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Name;
