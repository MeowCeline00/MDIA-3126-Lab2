import {View, Image} from ""

interface PostImage {
  uri: string;
}

const ProfileImage: React.FC<PostImage> = ({ uri }) => {
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
