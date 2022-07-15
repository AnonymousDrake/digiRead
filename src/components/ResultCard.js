import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import ErrorPage from './ErrorPage';
import ResultCardItem from './ResultCardItem';

const ResultCard = ({data, onThresholdReached, onPress}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        key={item => item.id}
        renderItem={({item, index}) => (
          <ResultCardItem data={item} onPress={onPress} index={index} />
        )}
        showsVerticalScrollIndicator={false}
        onEndReached={() => onThresholdReached()}
        style={styles.list}
        onEndReachedThreshold={1}
        ListEmptyComponent={() => (
          <ErrorPage message={'Nothing to show!\nTry refining your search.'} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 4,
    elevation: 5,
    paddingHorizontal: 6,
  },
  list: {
    flex: 1,
  },
});

export default ResultCard;
