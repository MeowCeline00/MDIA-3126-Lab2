import { View } from "react-native";
import InputForm from "@/components/molecules/InputForm";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <InputForm 
        labelText="Button Label"
        buttonTitle="Button!"
        placeholderText="I'm an input form!"
        placeholderTextColor="pink"
      />
    </View>
  );
}

// export default function InputForm({ labelText, buttonTitle, placeholderText }) {
