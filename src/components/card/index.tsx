import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Items } from "../../interfaces";
import { styles } from "./styles";

interface Props {
  items: Items;
}

const CardComponent: React.FC<Props> = ({ items }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: items.photo,
          }}
        />
        <Text style={styles.name}>{items.name}</Text>
        <Text style={styles.price}>€{items.price.toLocaleString()}</Text>
      </View>
    </View>
  );
};

export default CardComponent;
