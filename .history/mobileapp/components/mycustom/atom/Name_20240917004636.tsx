import { Name as NativeButton, View } from "react-native";

export default function Button({ buttonTitle }) {
    return (
        <View>
            <NativeButton 
                color="salmon"
                title={buttonTitle}
            />
        </View>
    )
}
