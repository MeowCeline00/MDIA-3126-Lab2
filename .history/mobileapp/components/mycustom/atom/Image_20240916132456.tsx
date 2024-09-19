import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface ProfileImageProps {
  uri: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ uri }) => {
  return <Image source={{ uri }} style={styles.image} />;
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default ProfileImage;
