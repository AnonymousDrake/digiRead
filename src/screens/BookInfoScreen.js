import React from 'react';
import {StyleSheet, View, Linking} from 'react-native';
import {connect} from 'react-redux';
import BookInfoBody from '../components/BookInfoBody';
import BookInfoHeader from '../components/BookInfoHeader';

const BookInfoScreen = ({
  route,
  navigation,
  searchResult,
  recommendedResult,
  continueResult,
  favoritesResult,
  myBooksResult,
  purchasedResult,
}) => {
  const bookIndex = route.params.index;
  const category = route.params.category;
  let data = {};

  if (category === 'search') data = searchResult(bookIndex);
  else if (category === 'recommended') data = recommendedResult(bookIndex);
  else if (category === 'continueReading') data = continueResult(bookIndex);
  else if (category === 'myBooks') data = myBooksResult(bookIndex);
  else if (category === 'favorites') data = favoritesResult(bookIndex);
  else if (category === 'purchased') data = purchasedResult(bookIndex);

  const onSampleViewPress = () => {
    const url = data.accessInfo.webReaderLink;
    if (Linking.canOpenURL(url)) Linking.openURL(url);
  };
  const onStoreButtonPress = () => {
    const url = data.volumeInfo.infoLink;
    if (Linking.canOpenURL(url)) Linking.openURL(url);
  };
  const onPurchasePress = () => {
    const url = data.saleInfo.buyLink;
    if (Linking.canOpenURL(url)) Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <BookInfoHeader
        bookTitle={data.volumeInfo.title}
        onPressBack={() =>
          navigation.navigate(route.params.prevScreen, {loading: false})
        }
      />
      <BookInfoBody
        bookThumbnail={data.volumeInfo.imageLinks.thumbnail}
        bookTitle={data.volumeInfo.title}
        bookAuthor={
          data.volumeInfo.authors ? data.volumeInfo.authors[0] : undefined
        }
        bookPublisher={data.volumeInfo.publisher}
        bookDescription={data.volumeInfo.description}
        bookRating={data.volumeInfo.averageRating}
        pageCount={data.volumeInfo.pageCount}
        bookType={data.volumeInfo.printType}
        saleInfo={data.saleInfo}
        sampleAvailable={data.accessInfo.accessViewStatus === 'SAMPLE'}
        onSampleViewPress={onSampleViewPress}
        onStoreButtonPress={onStoreButtonPress}
        onPurchasePress={onPurchasePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
  },
});

const mapStateToProps = state => ({
  searchResult: index => state.search.result[index],
  recommendedResult: index => state.books.data.recommended.payload[index],
  favoritesResult: index => state.books.data.favorites.payload[index],
  purchasedResult: index => state.books.data.purchased.payload[index],
  myBooksResult: index => state.books.data.myBooks.payload[index],
  continueResult: index => state.books.data.continueReading.payload[index],
});

export default connect(mapStateToProps, undefined)(BookInfoScreen);
