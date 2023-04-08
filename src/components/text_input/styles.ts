import {  StyleSheet } from "react-native";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { COLORS } from "../../../utils";


 export const styles = StyleSheet.create({
    currencyText: {
      position: "absolute",
      right: WP(2.7),
      top: WP(5.4),
      fontSize: WP(5.2),
    },
    textInput: {
      borderWidth: WP(0.1),
      borderRadius: WP(2.7),
      backgroundColor: COLORS.white,
      borderColor: COLORS.lightGray,
      justifyContent: "center",
      paddingHorizontal: WP(2.7),
      marginTop: WP(1.875),
      fontSize: WP(5.2),
    },
    textInputFocused: {
      borderColor: COLORS.primary,
    },
  });