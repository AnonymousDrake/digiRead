import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SearchResultHeader from '../components/SearchResultHeader';
import ResultCard from '../components/ResultCard';
import { getSearchResults, resetSearch } from '../actions';
import LoadingBarFull from '../components/LoadingBarFull';

const SearchResultScreen = ({ searchString, navigation, data, fetchMoreResults, filters, startIndex, resetSearchReducer, totalItems, route, searchLoading, maxResults }) => {
  if (route.params.loading && !searchLoading) {
    route.params.loading = false;
  }
  const onBackPress = () => {
    navigation.navigate("Home_Main");
    setTimeout(resetSearchReducer, 200);
  }
  const onSearchPress = () => navigation.navigate("Search_Focus", {
    previousScreen: "Search_Result"
  });

  const onViewBookPress = (index) => navigation.navigate("Book_Info", { index, category: "search", prevScreen: "Search_Result" });

  return (
    <View style={styles.container}>
      <SearchResultHeader
        title={searchString}
        onPressBack={onBackPress}
        onSearchIconPress={onSearchPress}
      />
      {route.params.loading ? <LoadingBarFull /> :
        <ResultCard
          data={data}
          onThresholdReached={() => fetchMoreResults(searchString, filters, startIndex + maxResults)}
          totalItems={totalItems}
          onPress={onViewBookPress}
          startIndex={startIndex}
          maxResults={maxResults}
        />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202124"
  }
})

const mapStateToProps = (state) => ({
  searchString: state.search.searchString,
  filters: state.search.filters,
  data: state.search.result,
  startIndex: state.search.startIndex,
  totalItems: state.search.totalItems,
  searchLoading: state.search.searchLoading,
  maxResults: state.search.maxResults,
})

const mapDispatchToProps = (dispatch) => ({
  fetchMoreResults: (str, filter, index) => dispatch(getSearchResults(str, filter, index)),
  resetSearchReducer: () => dispatch(resetSearch()),
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchResultScreen);