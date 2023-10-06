import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { BoxType } from "../Box";
import { ButtonType } from "../Button";
import { responsiveSize } from "@/theme/responsiveSize";


export const mainContainer: BoxType = {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
}
export const closeBtnStyle: StyleProp<ViewStyle> = {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: -1,
}

export const containerStyle: StyleProp<ViewStyle> = {
    padding: 14,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10
}

export const pickImageStyle: ButtonType = {
    backgroundColor: 'secondaryBg',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    width: '40%',
    paddingVertical: 32,
    alignSelf: 'center',
}

export const usernameInputStyle: StyleProp<TextStyle> = {
    width: '100%',
    padding: 16,
    marginTop: responsiveSize[24],
    fontSize: responsiveSize[12],
    borderRadius: 4
}

export const createPlayerBtnStyle: ButtonType = {
    marginTop: 14,
    padding: 4,
}