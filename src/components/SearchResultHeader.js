import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchResultHeader = ({ title, onPressBack, onSearchIconPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.backIconContainer}>
        <TouchableOpacity
          onPress={onPressBack}
          style={styles.touchable}
        >
          <Icon
            name="arrow-left"
            size={18}
            color={"#999FA5"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.titleBox}>
        <Text numberOfLines={1} style={styles.titleText}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.searchIcon} onPress={onSearchIconPress}>
        <Icon name="search" size={18} color={"#999FA5"} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.2,
    borderBottomColor: "#999FA5"
  },
  titleBox: {
    flexDirection: "row",
    flex: 1,
    marginRight: 50,
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
  searchIcon: {
    position: "absolute",
    right: 28,
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  }
})

export default SearchResultHeader;