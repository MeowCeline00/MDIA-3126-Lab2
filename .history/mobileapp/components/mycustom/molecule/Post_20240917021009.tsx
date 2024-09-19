import { View, TextInput } from "react-native";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";

export default function InputForm({ labelText, buttonTitle, placeholderText, placeholderTextColor }) {
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