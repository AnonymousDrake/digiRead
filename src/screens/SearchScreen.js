import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getSearchResults, resetSearch} from '../actions';
import SearchHeaderFocused from '../components/SearchHeaderFocused';
import FilterPicker from '../components/FilterPicker';

const SearchScreen = ({
  initiateSearch,
  searchString,
  navigation,
  filters,
  route,
  resetSearchReducer,
  availableFilters,
}) => {
  const [searchDetails, setSearchDetails] = useState({
    searchString,
    filters: {
      searchBy: filters.searchBy,
      searchFor: filters.searchFor,
      setPrice: filters.setPrice,
      orderBy: filters.orderBy,
    },
    backPressed: false,
  });
  if (
    searchDetails.backPressed &&
    route.params.previousScreen !== 'Home_Main'
  ) {
    setTimeout(
      () =>
        setSearchDetails({
          searchString,
          filters: {
            searchBy: filters.searchBy,
            searchFor: filters.searchFor,
            setPrice: filters.setPrice,
            orderBy: filters.orderBy,
          },
          backPressed: false,
        }),
      200,
    );
  }

  const onDeleteFilters = () => {
    setSearchDetails({
      searchString: searchDetails.searchString,
      filters: {
        searchBy: availableFilters.searchBy[0].value,
        searchFor: availableFilters.searchFor[0].value,
        setPrice: availableFilters.setPrice[0].value,
        orderBy: availableFilters.orderBy[0].value,
      },
    });
  };
  const onSearchByValueChange = searchBy => {
    setSearchDetails({
      ...searchDetails,
      filters: {...searchDetails.filters, searchBy},
    });
  };
  const onSearchForValueChange = searchFor => {
    setSearchDetails({
      ...searchDetails,
      filters: {...searchDetails.filters, searchFor},
    });
  };
  const onSetPriceValueChange = setPrice => {
    setSearchDetails({
      ...searchDetails,
      filters: {...searchDetails.filters, setPrice},
    });
  };
  const onOrderByValueChange = orderBy => {
    setSearchDetails({
      ...searchDetails,
      filters: {...searchDetails.filters, orderBy},
    });
  };
  const onSearchStringChange = searchString => {
    setSearchDetails({...searchDetails, searchString});
  };
  const onSearchPress = () => {
    initiateSearch(searchDetails.searchString, searchDetails.filters, 0);
    navigation.navigate('Search_Result', {loading: true});
  };
  const onBackButtonPressed = () => {
    navigation.navigate(route.params.previousScreen, {
      loading: false,
    });
    setSearchDetails({...searchDetails, backPressed: true});
  };

  return (
    <View style={styles.container}>
      <SearchHeaderFocused
        onPressBack={onBackButtonPressed}
        onPressSubmit={onSearchPress}
        searchString={searchDetails.searchString}
        onChangeText={onSearchStringChange}
        previousScreen={route.params.previousScreen}
        resetSearchReducer={resetSearchReducer}
      />

      <View style={styles.bodyContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.infoHeader}>
            <Icon name="filter" style={styles.filterIcon} />
            <Text style={styles.infoHeading}>Filters</Text>
            <TouchableOpacity
              onPress={onDeleteFilters}
              style={styles.removeFilter}>
              <Text style={styles.removeFilterText}>Reset</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoBody}>
            <FilterPicker
              data={availableFilters.searchBy}
              title="Search In:"
              onValueChange={onSearchByValueChange}
              selected={searchDetails.filters.searchBy}
            />
            <FilterPicker
              data={availableFilters.searchFor}
              title="Search For:"
              onValueChange={onSearchForValueChange}
              selected={searchDetails.filters.searchFor}
            />
            <FilterPicker
              data={availableFilters.setPrice}
              title="Set Price:"
              onValueChange={onSetPriceValueChange}
              selected={searchDetails.filters.setPrice}
            />
            <FilterPicker
              data={availableFilters.orderBy}
              title="Order By:"
              onValueChange={onOrderByValueChange}
              selected={searchDetails.filters.orderBy}
            />
          </View>

          <View style={styles.searchButton}>
            <Button
              title={'Search'}
              onPress={onSearchPress}
              disabled={searchDetails.searchString.length === 0}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: '#202124',
    padding: 4,
    paddingBottom: 0,
  },
  infoContainer: {
    backgroundColor: '#303134',
    flex: 1,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  infoHeader: {
    flexDirection: 'row',
    height: 50,
    borderBottomColor: '#000',
    borderBottomWidth: 0.25,
    paddingLeft: 10,
    paddingRight: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoHeading: {
    color: 'white',
    fontSize: 16,
  },
  removeFilter: {
    position: 'absolute',
    right: 20,
  },
  removeFilterText: {
    color: '#007AFF',
  },
  filterIcon: {
    paddingRight: 6,
    marginTop: 2,
    color: 'white',
  },
  infoBody: {
    height: 300,
    flex: 1,
  },
  searchButton: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 80,
  },
});

const mapStateToProps = state => ({
  searchString: state.search.searchString,
  filters: state.search.filters,
  availableFilters: state.search.availableFilters,
});

const mapDispatchToProps = dispatch => ({
  initiateSearch: (stringToSearch, filters, startIndex) =>
    dispatch(getSearchResults(stringToSearch, filters, startIndex)),
  resetSearchReducer: () => dispatch(resetSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
