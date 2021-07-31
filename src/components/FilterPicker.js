import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from "@react-native-picker/picker";

const FilterPicker = ({ title, data, selected, onValueChange }) => {
  return (
    <View style={styles.infoItem}>
      <Text style={styles.infoItemText}>{title}</Text>
      <Picker
        mode={"dropdown"}
        selectedValue={selected}
        style={styles.picker}
        onValueChange={onValueChange}
      >
        {data.map((item) =>
          <Picker.Item
            label={item.label}
            value={item.value}
            key={item.id}
            style={styles.pickerItem}
          />
        )}
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 68,
    padding: 8,
    paddingLeft: 12,
    borderBottomWidth: 0.2,
    borderBottomColor: "black"
  },
  infoItemText: {
    color: 'white',
    fontSize: 16,
    height: 35,
    marginTop: 15,
  },
  picker: {
    height: 50,
    width: 160,
    color: "#007AFF",
  },
  pickerItem: {
    color: "#999FA5"
  },
})

export default FilterPicker;