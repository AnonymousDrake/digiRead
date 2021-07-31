import React from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchHeaderFocused = ({ searchString, onPressBack, onChangeText, onPressSubmit, previousScreen, resetSearchReducer }) => {
  return (
    <View style={styles.container}>
      <View style={styles.backIconContainer}>
        <TouchableOpacity
          onPress={() => {
            onPressBack();
            if (previousScreen === "Home_Main") resetSearchReducer();
          }}
          style={styles.touchable}
        >
          <Icon
            name="arrow-left"
            size={18}
            color={"white"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchBox}>
        <View style={styles.searchInputContainer}>
          <TextInput
            value={searchString}
            placeholder={"Search Here"}
            placeholderTextColor="#999FA5"
            style={styles.input}
            autoFocus={true}
            enablesReturnKeyAutomatically={true}
            onChangeText={onChangeText}
            onSubmitEditing={() => { if (searchString.length > 0) onPressSubmit() }}
            returnKeyType={"search"}
          />
        </View>
        {searchString.length > 0 ?
          <View style={styles.clearButtonContainer}>
            <TouchableOpacity
              style={styles.clearButtonTouchable}
              onPress={() => onChangeText("")}
            >
              <Icon2
                name="close"
                size={20}
                color={"white"}
              />
            </TouchableOpacity>
          </View> : undefined}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#303134",
    elevation: 5,
    borderBottomWidth: 0.6,
    borderBottomColor: "black"
  },
  searchBox: {
    flexDirection: "row",
    flex: 1,
  },
  backIconContainer: {
    alignItems: "center",
    width: 44,
    height: "100%",
  },
  searchInputContainer: {
    paddingLeft: 5,
    marginTop: 4,
    flex: 1,
    height: "100%",
  },
  touchable: {
    width: "80%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    fontSize: 18,
    color: "white",
  },
  clearButtonContainer: {
    paddingHorizontal: 14,
    justifyContent: "center",
    height: "100%",
    width: 60,
    alignItems: "center",
  },
  clearButtonTouchable: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default SearchHeaderFocused;