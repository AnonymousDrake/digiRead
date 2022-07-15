import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ResultCardItem = ({data, onPress, index}) => {
  const item = data.volumeInfo;

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => onPress(index)}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: item.imageLinks ? item.imageLinks.smallThumbnail : undefined,
          }}
          style={{flex: 1, borderRadius: 4}}
          resizeMode={'stretch'}
        />
      </View>
      <View style={styles.infoContainer}>
        <View style={{flexDirection: 'row'}}>
          <Text numberOfLines={1} style={styles.titleText}>
            {item.title}
          </Text>
          <Text
            style={{...styles.subtitleText, position: 'absolute', right: 2}}>
            {data.saleInfo.saleability === 'FREE' ? 'FREE' : 'PAID'}
          </Text>
        </View>
        <View style={styles.subInfoContainer}>
          <Text style={styles.subtitleText}>{item.printType}</Text>
          {item.averageRating ? (
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.subtitleText}>
                {item.averageRating ? item.averageRating : 'No Ratings'}
                {item.averageRating ? (
                  <Icon
                    name={'star-outline'}
                    size={15}
                    style={{marginTop: 2}}
                    color={'#999FA5'}
                  />
                ) : (
                  ''
                )}
              </Text>
            </View>
          ) : undefined}
        </View>
        {item.authors && item.printType === 'BOOK' ? (
          <Text style={styles.subtitleText} numberOfLines={1}>
            {item.authors.length > 1 ? item.authors[0] : item.authors}
          </Text>
        ) : undefined}
        {item.publisher ? (
          <Text style={styles.subtitleText}>{item.publisher}</Text>
        ) : undefined}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          {item.publishedDate ? (
            <Text style={styles.subtitleText}>
              Published: {item.publishedDate}
            </Text>
          ) : undefined}
          {item.maturityRating === 'MATURE' ? (
            <Text style={styles.ratingText}>18+</Text>
          ) : undefined}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 120,
    marginVertical: 10,
    marginLeft: 8,
  },
  imageContainer: {
    height: 120,
    width: 90,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
    marginRight: 2,
  },
  titleText: {
    fontSize: 16,
    color: 'white',
    width: '85%',
  },
  subtitleText: {
    color: '#999FA5',
    marginTop: 2,
  },
  subInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ratingText: {
    marginTop: 2,
    color: 'red',
    fontSize: 14,
  },
});

export default ResultCardItem;
