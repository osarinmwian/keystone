import {  StyleSheet } from "react-native";
import { widthPercentageToDP as WP } from "react-native-responsive-screen";
import { COLORS } from "../../../utils";


 export 
 const styles = StyleSheet.create({
   addPhotosText: {
     fontSize: WP(5.2),
     fontWeight: "700",
     marginTop: WP(2.7),
   },
   addText: {
     color: COLORS.primary,
     fontSize: WP(5.4),
     fontWeight: "bold",
   },
   cameraIconContainer: {
     justifyContent: "center",
     alignItems: "center",
   },
   cancelText: {
     color: COLORS.primary,
     fontSize: WP(5.4),
     fontWeight: "bold",
   },
   containerTextInputStyle: {
     textAlignVertical: "top",
     paddingTop: WP(2.7),
   },
   container: {
     backgroundColor: COLORS.background,
   },
   deleteImageIcon: {
     height: WP(10.4),
     width: WP(10.4),
     borderRadius: WP(10.4),
     backgroundColor: COLORS.red,
     position: "absolute",
     justifyContent: "center",
     alignItems: "center",
     bottom: WP(0),
     right: WP(0),
   },
   descriptionText: {
     marginTop: WP(5.4),
   },
   dropDownContainer: {
     flexDirection: "row",
     height: WP(15.75),
     alignItems: "center",
     justifyContent: "space-between",
     borderColor: COLORS.lightGray,
     borderWidth: 2,
     paddingHorizontal: WP(2.7),
     borderRadius: WP(2.7),
     marginTop: WP(1.875),
   },
   footer: {
     marginBottom: WP(5.4),
   },
   headerContainer: {
     flexDirection: "row",
     justifyContent: "space-between",
     marginTop: WP(5.4),
   },
   modalContainer: {
     margin: WP(0),
     justifyContent: "flex-end",
   },
   modalSubContainer: {
     flexDirection: "row",
     justifyContent: "space-around",
     alignItems: "flex-end",
   },
   modalWrap: {
     width: "100%",
     backgroundColor: "background",
     overflow: "hidden",
     borderTopEndRadius: WP(5.4),
     borderTopStartRadius: WP(5.4),
   },
   picsContainer: {
     height: WP(54),
     width: WP(54),
     borderRadius: WP(54),
     backgroundColor: COLORS.white,
     alignSelf: "center",
     justifyContent: "center",
     alignItems: "center",
   },
   subContainer: {
     paddingHorizontal: WP(5.4),
   },

});