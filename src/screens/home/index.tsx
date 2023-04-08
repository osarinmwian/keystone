import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import CardComponent from "../../components/card";
import { RootState } from "../../store/store";
import { COLORS } from "../../../utils";
import ItemModal from "../modal";
import { styles } from "./styles";

const HomeScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const valuables = useSelector((state: RootState) => state.valuables.data);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Inventory</Text>
          <TouchableOpacity onPress={toggleModal}>
            <AntDesign name="pluscircle" size={35} color="#3646d1" />
          </TouchableOpacity>
        </View>
        <View style={{ padding: 5 }}>
          <FlatList
            numColumns={2}
            data={valuables.list}
            showsVerticalScrollIndicator={false}
            keyExtractor={(index) => `${index}`}
            renderItem={({ item }) => {
              return <CardComponent items={item} />;
            }}
            ListFooterComponent={() => <View style={styles.footer} />}
          />
        </View>
        <StatusBar barStyle="default" />
      </View>
      <ItemModal
        isVisible={isModalVisible}
        closeModal={() => setModalVisible(!isModalVisible)}
      />
    </SafeAreaView>
  );
};
export default HomeScreen;
