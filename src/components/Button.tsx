import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isLightGrey?: boolean;
    isGray?: boolean;
}

export default function Button({ title, onPress, isLightGrey, isGray }: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            style={
                isLightGrey
                ? Styles.btnOrange
                : isGray
                ? Styles.btnLightGrey
                : theme === "light"
                ? Styles.btnGray
                : Styles.btnGray
            }
            onPress={onPress}>
            <Text
               style={
                   isLightGrey || isGray
                   ? Styles.smallTextLight
                   : theme === "dark"
                   ? Styles.smallTextLight
                   : Styles.smallTextDark
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}
