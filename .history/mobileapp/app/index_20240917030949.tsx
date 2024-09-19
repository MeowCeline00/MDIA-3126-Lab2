import React from 'react';
import { View, Text } from "react-native";
import PostContent from '@/components/mycustom/molecule/Post'; 

export default function Index() {
  return (
    <View
      style={{
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        borderColor: "orange",
        borderRadius: 
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: 'brown',
          fontWeight: '900',
          marginBottom: 5,
          textAlign: 'center'
        }}
      >
        Welcome to the Story of Momma Cat!
      </Text>

      <PostContent 
        imageUri="https://upload.wikimedia.org/wikipedia/commons/0/0d/Momma_Cat_%26_squash_on_the_porch_3_%2848757670872%29.jpg"
        nameTitle="Momma Cat"
        messageContent={`This is Momma Cat. He was once suspected of stealing squash from Tom's family farm.For weeks, Tom couldn't figure out who was taking the squash every night, until one day, he found Momma Cat sneaking around the farm. Instead of chasing him away,Tom and his family decided to adopt him. Ever since then, Momma Cat has stopped stealing squash and started helping the family by catching all the rats on the farm.Now, he's not just a suspect, but the farm's hero!`}
      />
    </View>
  );
}
