import instance from '../api/searchApi';

const updateValuesBeforeSearch = (searchString, filters) => ({
  type: 'INITIATE_SEARCH',
  payload: {filters, searchString},
});

const search = (response, totalItems, startIndex) => ({
  type: 'SEARCH_RESULT',
  payload: {response, totalItems, startIndex},
});

export const getSearchResults = (searchString, filters, startIndex) => {
  return async dispatch => {
    try {
      const searchStr = searchString.trim();
      dispatch(updateValuesBeforeSearch(searchStr, filters, startIndex));

      let q =
        filters.searchBy.length > 0
          ? filters.searchBy + ' ' + searchStr
          : searchStr;
      instance.defaults.params = {
        ...instance.defaults.params,
        q,
        printType: filters.searchFor,
        orderBy: filters.orderBy,
        startIndex,
      };

      if (filters.setPrice !== '')
        instance.defaults.params['filter'] = filters.setPrice;
      else instance.defaults.params['filter'] = undefined;

      const response = await instance.get('/volumes');
      const newResponse = response.data.items.filter(
        item =>
          item.saleInfo.saleability !== 'NOT_FOR_SALE' ||
          item.accessInfo.accessViewStatus !== 'NONE',
      );
      dispatch(
        search({items: newResponse}, response.data.totalItems, startIndex),
      );
    } catch (err) {
      console.log(err);
    }
  };
};

export const resetSearch = () => ({
  type: 'SEARCH_RESET',
});

export const removeSearchResults = () => ({
  type: 'RESULTS_REMOVE',
});
