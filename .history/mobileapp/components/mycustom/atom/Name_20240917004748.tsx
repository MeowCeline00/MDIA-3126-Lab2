import { Name as Text, View } from "react-native";

export default function Name({ buttonTitle }) {
    return (
        <View>
            <NativeButton 
                color="salmon"
                title={buttonTitle}
            />
        </View>
    )
}
