import React from "react";
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BookInfoBody = ({
  bookThumbnail,
  bookTitle,
  bookAuthor,
  bookPublisher,
  bookRating,
  pageCount,
  bookType,
  saleInfo,
  sampleAvailable,
  onSampleViewPress,
  onPurchasePress,
  onStoreButtonPress,
  bookDescription
}) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={{ uri: bookThumbnail }} style={styles.thumbnailImage} resizeMode={"stretch"} />
        <View style={styles.textContainer}>
          <Text numberOfLines={10} style={styles.titleText}>{bookTitle}</Text>
          {bookAuthor ? <Text style={styles.subtitleText} numberOfLines={1}>{bookAuthor}</Text> : undefined}
          {bookPublisher ? <Text style={styles.subtitleText} numberOfLines={1}>{bookPublisher}</Text> : undefined}
        </View>
      </View>
      <View style={styles.barContainer}>
        <View style={styles.barItemContainer}>
          <Text
            style={{ ...styles.barItemText, color: "white" }}
          >
            {bookRating ? bookRating : "Unrated"}
          </Text>
          {bookRating ? <Icon name={"star"} size={16} style={{ marginTop: 2 }} color={"white"} /> : undefined}
        </View>
        <View style={{ ...styles.barItemContainer, flexDirection: "column" }}>
          <Icon name={bookType === "BOOK" ? "book" : "newspaper"} size={24} color="#999fa5" />
          <Text style={styles.barItemText}>{bookType[0] + bookType.slice(1, bookType.length).toLowerCase()}</Text>
        </View>
        <View style={{ ...styles.barItemContainer, borderRightWidth: 0, flexDirection: "column" }}>
          <Text style={{ ...styles.barItemText, color: "white" }}>{`${pageCount ? pageCount : "N/A"}`}</Text>
          <Text style={styles.barItemText}>Pages</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {sampleAvailable ? <Pressable style={{ ...styles.pressable, backgroundColor: "white" }} onPress={onSampleViewPress}><Text style={{ color: "#2196F3" }}>View Sample</Text></Pressable> : undefined}
        {saleInfo.saleability === "FREE" ?
          <Pressable style={styles.pressable} onPress={onPurchasePress}>
            <Text style={{ color: "white" }}>Buy For Free</Text>
          </Pressable> : saleInfo.offers ?
            <Pressable style={styles.pressable} onPress={onPurchasePress}>
              <Text style={{ color: "white" }}>{saleInfo.listPrice.currencyCode} </Text>
              <Text style={{
                color: "white",
                textDecorationLine: saleInfo && saleInfo.offers[0].listPrice.amountInMicros != saleInfo.offers[0].retailPrice.amountInMicros ? "line-through" : undefined,
                textDecorationColor: "black"
              }}
              >
                {saleInfo.listPrice.amount}
              </Text>
              <Text> </Text>
              <Text style={{ color: "red" }}>
                {saleInfo.offers[0].listPrice.amountInMicros != saleInfo.offers[0].retailPrice.amountInMicros ? saleInfo.offers[0].retailPrice.amountInMicros / 1000000 : ""}
              </Text>
            </Pressable> : undefined}
      </View>
      <View style={{ ...styles.buttonContainer }}>
        <Pressable style={styles.pressable} onPress={onStoreButtonPress}>
          <Text style={{ color: "white" }}>View in Play Store</Text>
        </Pressable>
      </View>
      {bookDescription ? <View style={styles.aboutContainer}>
        <View style={styles.aboutHeader}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "normal" }}>About the Ebook</Text>
        </View>
        <ScrollView style={{ paddingHorizontal: 10, paddingVertical: 6, }}>
          <Text style={{ ...styles.subtitleText, fontSize: 16, }}>{bookDescription}</Text>
          <Text></Text>
        </ScrollView>
      </View> : undefined}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    maxHeight: 498,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 6,
    paddingHorizontal: 10,
  },
  thumbnailImage: {
    height: 140,
    width: 128,
    borderRadius: 2,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 16,
    padding: 10,
    paddingTop: 2,
  },
  titleText: {
    fontSize: 22,
    color: "#f0f2f0",
    fontWeight: "bold"
  },
  subtitleText: {
    color: "#999FA5",
    marginTop: 2,
  },
  barContainer: {
    flexDirection: "row",
    width: 240,
    height: 70,
    marginVertical: 20,
    alignSelf: "center"
  },
  barItemContainer: {
    flexDirection: "row",
    height: 60,
    width: 90,
    borderRightWidth: 0.8,
    borderRightColor: "#999FA5",
    alignItems: "center",
    justifyContent: "center",
  },
  barItemText: {
    color: "#999fa5",
    fontSize: 16,
  },
  buttonContainer: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2196F3',
    flexDirection: "row",
    flex: 1,
    marginHorizontal: 10,
  },
  aboutContainer: {
    maxHeight: 280,
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "#303134",
    // borderRadius: 8,
  },
  aboutHeader: {
    height: 60,
    justifyContent: "space-between",
    flexDirection: "row",
    elevation: 5,
    backgroundColor: "#202124",
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: "center"
  }
})

export default BookInfoBody;