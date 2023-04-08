import {  StyleSheet } from "react-native";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { COLORS } from "../../../utils";


 export const styles = StyleSheet.create({
    container: {
      shadowColor: COLORS.black,
      shadowOffset: { width: WP(0), height: WP(2.7) },
      shadowOpacity:    WP(0.025),
      marginBottom: WP(5.4),
      marginHorizontal: WP(2.7),
      shadowRadius: 3.84,
      elevation: WP(2.7),
      borderRadius: WP(5.4),
      backgroundColor: COLORS.white,
      width: "45%",
    },
    image: { height: "60%", width: "100%" },
    name: {
      marginTop: WP(5.4),
      marginHorizontal: WP(5.4),
      fontSize: WP(5.4),
      fontWeight: "700",
    },
    price: {
      fontSize: WP(3.8),
      color: COLORS.gray,
      marginTop: "auto",
      marginBottom: WP(5.4),
      marginHorizontal: WP(5.4),
    },
    subContainer: {
      height: WP(81),
      backgroundColor: COLORS.white,
      borderRadius: WP(5.4),
      overflow: "hidden",
    },
  });