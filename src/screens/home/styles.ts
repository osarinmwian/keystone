import {  StyleSheet } from "react-native";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { COLORS } from "../../../utils";


 export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    footer: {
      height: WP(27),
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: WP(8.1),
      marginBottom: WP(2.7),
      paddingHorizontal: WP(2.7),
    },
    headerText: {
      fontSize: WP(9.4),
      fontWeight: "bold",
    },
    subContainer: {
      paddingRight: WP(1.95),
      flex: 1,
    },
  });