const initialState = {
  loading: true,
  data: {
    continueReading: {
      id: "3",
      name: "Continue Reading",
      emptyMessage: "Books you are currently reading will be shown here.\nLooks like you aren't reading anything right now!",
      totalItems: 0,
      startIndex: 0,
      payload: [],
    },
    favorites: {
      id: "0",
      name: "Favorites",
      emptyMessage: "Nothing in favorites!",
      totalItems: 0,
      startIndex: 0,
      payload: [],
    },
    myBooks: {
      id: '7',
      name: "My Ebooks",
      emptyMessage: "Like a book? Add it in your library.\n Books added to library show up here.",
      totalItems: 0,
      startIndex: 0,
      payload: [],
    },
    purchased: {
      id: '1',
      name: "Purchased",
      emptyMessage: "Nothing here!",
      totalItems: 0,
      startIndex: 0,
      payload: [],
    },
    recommended: {
      id: '8',
      name: "Books For You",
      emptyMessage: "Nothing here!",
      totalItems: 0,
      startIndex: 0,
      payload: [],
    },
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {};
    case "REMOVE":
      return {};
    case "GET_BOOKSHELF":
      return {};
    case "REMOVE_ALL":
      return {};
    case "HOME_SCREEN":
      const continueData = action.payload.continueReading;
      const favoritesData = action.payload.favorites;
      const purchasedData = action.payload.purchased;
      const myBooksData = action.payload.myBooks;
      const recommendedData = action.payload.recommended;

      const newState = {
        ...initialState,
        data: {
          ...initialState.data,
          continueReading: {
            ...initialState.data.continueReading,
            payload: continueData.totalItems > 0 ? continueData.items : [],
            totalItems: continueData.totalItems,
            startIndex: continueData.totalItems > 0 ? continueData.items.length : 0
          },
          favorites: {
            ...initialState.data.favorites,
            payload: favoritesData.totalItems > 0 ? favoritesData.items : [],
            totalItems: favoritesData.totalItems,
            startIndex: favoritesData.totalItems > 0 ? favoritesData.items.length : 0
          },
          myBooks: {
            ...initialState.data.myBooks,
            payload: myBooksData.totalItems > 0 ? myBooksData.items : [],
            totalItems: myBooksData.totalItems,
            startIndex: myBooksData.totalItems > 0 ? myBooksData.items.length : 0
          },
          purchased: {
            ...initialState.data.purchased,
            payload: purchasedData.totalItems > 0 ? purchasedData.items : [],
            totalItems: purchasedData.totalItems,
            startIndex: purchasedData.totalItems > 0 ? purchasedData.items.length : 0
          },
          recommended: {
            ...initialState.data.recommended,
            payload: recommendedData.totalItems > 0 ? recommendedData.items : [],
            totalItems: recommendedData.totalItems,
            startIndex: recommendedData.totalItems > 0 ? recommendedData.items.length : 0
          },
        },
        loading: false,
      }
      console.log(initialState);
      return newState;
    default:
      return state;
  }
}