import React, {useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BookCard from './BookCard';
import ErrorPage from './ErrorPage';
import LoadingBarFull from './LoadingBarFull';

const SubSection = ({data, fetchData, onBookPress, category}) => {
  return (
    <View style={{height: data.payload.length > 0 ? 330 : 180}}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{data.name}</Text>
        <Icon name={'arrow-right'} size={18} color={'#999fa5'} />
      </View>
      <View style={styles.bodyContainer}>
        {data.payload.length > 0 ? (
          <FlatList
            data={data.payload}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <BookCard
                data={item}
                onBookPress={onBookPress}
                index={index}
                category={category}
              />
            )}
            horizontal
            ListFooterComponent={
              data.totalItems !== data.payload.length ? (
                <LoadingBarFull />
              ) : (
                <View></View>
              )
            }
            onEndReached={() =>
              data.totalItems !== data.payload.length &&
              fetchData(data.id, data.startIndex)
            }
            showsHorizontalScrollIndicator={false}
          />
        ) : (
          <ErrorPage message={data.emptyMessage} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  headerText: {
    color: '#999fa5',
    fontSize: 18,
  },
  bodyContainer: {
    backgroundColor: '#303134',
    flex: 1,
  },
});

export default SubSection;
