import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const BookCard = ({ data, onBookPress, index, category }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9} onPress={() => onBookPress(index, category)}>
      <View>
        <Image source={{ uri: data.volumeInfo.imageLinks.thumbnail }} style={{ height: 230, width: 160, borderRadius: 2, }} resizeMode={"stretch"} />
      </View>
      <View style={styles.infoContainer}>
        <Text numberOfLines={1} style={styles.infoText}>{data.volumeInfo.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: 164,
    alignItems: "center"
  },
  infoContainer: {
    marginTop: 6,
    alignItems: "center",
    paddingHorizontal: 4,
  },
  infoText: {
    color: "#999fa5",
    fontSize: 14,
  }
})

export default BookCard;