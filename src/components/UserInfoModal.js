import React from 'react';
import { View, Modal, StyleSheet, Text, Button, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserInfoModal = ({ modalVisibility, setVisibility, startLogout, userAvatar, userEmail, userName }) => {
  const onLogoutPress = () => {
    setTimeout(() => startLogout(), 1000);
  }

  return (
    <Modal animationType={"fade"} visible={!!modalVisibility} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <TouchableOpacity style={styles.modalBackIcon} onPress={() => setVisibility(false)}>
            <Icon name="window-close" size={22} color="white" />
          </TouchableOpacity>
          <Text style={styles.modalHeaderText}>My Profile</Text>
        </View>
        <View style={styles.modalInfoContainer}>
          <Image source={{ uri: userAvatar }} style={styles.modalInfoAvatar} />
          <View style={styles.modalInfoSubcontainer}>
            <Text style={styles.modalInfoText}>{userEmail}</Text>
            <Text style={styles.modalInfoText}>{userName}</Text>
          </View>
        </View>
        <View style={styles.modalButtonContainer}>
          <Button title="Logout" onPress={onLogoutPress} style={styles.modalButton} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    height: "50%",
    marginTop: 100,
    marginHorizontal: 35,
    backgroundColor: "#444D51",
    borderRadius: 20,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 25,
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
  },
  modalBackIcon: {
    position: "absolute",
    right: 20,
    height: 20,
    width: 20,
    bottom: 14,
  },
  modalHeaderTextContainer: {
    flex: 1,
  },
  modalHeaderText: {
    color: "white",
    fontSize: 18,
    alignSelf: "center"
  },
  modalInfoContainer: {
    flex: 1,
    marginVertical: 18,
    alignItems: "center",
  },
  modalInfoSubcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalInfoText: {
    fontSize: 18,
    color: "white",
    marginVertical: 4,
  },
  modalInfoAvatar: {
    height: 120,
    width: 120,
    borderRadius: 120,
  },
  modalButtonContainer: {
    paddingBottom: 40,
    paddingHorizontal: 70,
    justifyContent: "center",
  },
})

export default UserInfoModal;