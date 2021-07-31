const initialState = {
  searchLoading: false,
  searchError: undefined,
  searchString: "",
  startIndex: 0,
  result: [],
  totalItems: 0,
  maxResults: 40,
  filters: {
    searchBy: "",
    searchFor: "all",
    setPrice: "",
    orderBy: "relevance"
  },
  availableFilters: {
    searchBy: [{
      id: 0,
      label: "All",
      value: "",
    }, {
      id: 1,
      label: "Title",
      value: "intitle:"
    }, {
      id: 2,
      label: "Author",
      value: "inauthor:"
    }, {
      id: 3,
      label: "Publisher",
      value: "inpublisher:",
    }],
    searchFor: [{
      id: 0,
      label: "All",
      value: "all"
    }, {
      id: 1,
      label: "Books",
      value: "books"
    }, {
      id: 2,
      label: "Magazines",
      value: "magazines"
    }],
    setPrice: [{
      id: 0,
      label: "All",
      value: ""
    }, {
      id: 1,
      label: "Free",
      value: "free-ebooks"
    }, {
      id: 2,
      label: "Paid",
      value: "paid-ebooks"
    }],
    orderBy: [{
      id: 0,
      label: "Relevance",
      value: "relevance"
    }, {
      id: 1,
      label: "Newest",
      value: "newest"
    }]
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "INITIATE_SEARCH":
      return {
        ...state,
        searchLoading: true,
        filters: action.payload.filters,
        searchString: action.payload.searchString,
        searchError: undefined,
      };
    case "SEARCH_RESULT":
      return {
        ...state,
        result: action.payload.startIndex === 0 ?
          action.payload.response.items :
          state.result.concat(action.payload.response.items),
        searchLoading: false,
        totalItems: action.payload.totalItems,
        startIndex: action.payload.startIndex,
      };
    case "SEARCH_RESET":
      return { ...initialState };
    case "RESULTS_REMOVE":
      return { ...state, result: initialState.result, startIndex: 0, totalItems: initialState.totalItems };
    default:
      return state;
  }
}