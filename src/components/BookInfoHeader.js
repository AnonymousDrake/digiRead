import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const BookInfoHeader = ({ bookTitle, onPressBack }) => {
  return <View style={styles.container}>
    <View style={styles.backIconContainer}>
      <TouchableOpacity
        onPress={onPressBack}
        style={styles.touchable}
        activeOpacity={0.8}
      >
        <Icon
          name="arrow-left"
          size={18}
          color={"#999FA5"}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.titleBox}>
      <Text numberOfLines={1} style={styles.titleText}>
        {bookTitle}
      </Text>
    </View>
    <TouchableOpacity style={styles.infoIcon}>
      <Icon2 name="star" size={20} color={"white"} />
      <Icon2 name="star-outline" size={20} color={"#999fa5"} />
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: "#999fa5"
  },
  titleBox: {
    flexDirection: "row",
    flex: 1,
    marginRight: 40,
    marginLeft: 20,
  },
  backIconContainer: {
    alignItems: "center",
    width: 44,
    height: "100%",
  },
  touchable: {
    width: "80%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  infoIcon: {
    position: "absolute",
    right: 28,
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  }
})

export default BookInfoHeader;