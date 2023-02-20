import { StyleSheet } from "react-native";
import { myColors } from "./Colors"; 

export const Styles = StyleSheet.create({
    // Button
    btnLightGrey: {
        width: 72,
        height: 72,
        borderRadius: 50,
        backgroundColor: myColors.lightGrey,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnOrange: {
        width: 72,
        height: 72,
        borderRadius: 50,
        backgroundColor: myColors.btnOrange,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 50,
        backgroundColor: myColors.btnGray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.white,
    },
    // Keyboard
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    operationView: {
        color: "#ff9700",
        fontSize: 50,
        fontWeight: '500'
    },
    wrapper: {
        height: 120,
        width: "90%",
        justifyContent: "flex-end",
        alignSelf: "center",
    }
})
