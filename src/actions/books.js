import {
  bookshelfGetConfiguration,
  bookshelfEditConfiguration,
} from '../api/booksApi';

const getMyBooks = (id, response) => ({
  type: 'GET_BOOKSHELF',
  payload: {id, response},
});

const getHomeScreen = payload => ({
  type: 'HOME_SCREEN',
  payload,
});

export const startGetHomeScreen = () => {
  return async dispatch => {
    try {
      const instance = await bookshelfGetConfiguration(0);
      const response0 = await instance.get('/volumes/3');
      const response1 = await instance.get('/volumes/0');
      const response2 = await instance.get('/volumes/7');
      const response3 = await instance.get('/volumes/1');
      const response4 = await instance.get('/volumes/8');

      const finalResponse = {
        continueReading: response0.data,
        favorites: response1.data,
        myBooks: response2.data,
        purchased: response3.data,
        recommended: response4.data,
      };

      if (
        !!response0 &&
        !!response1 &&
        !!response2 &&
        !!response3 &&
        !!response4
      )
        dispatch(getHomeScreen(finalResponse));
    } catch (err) {
      console.log(err);
    }
  };
};

export const startGetMyBooks = (code, startIndex) => {
  return async dispatch => {
    try {
      const instance = await bookshelfGetConfiguration(startIndex);
      const response = await instance.get('/' + code.toString() + '/volumes');
      if (!!response);
      // dispatch(getMyBooks(code, response.data));
    } catch (err) {
      console.log(err);
    }
  };
};

// export const startAddVolume = async (code, bookId) => {
//   const instance = bookshelfEditConfiguration(bookId);
//   await instance.post(`/${code}/addVolume`)
//     .then(response => console.log(response))
//     .catch((err) => console.log(err));
// }

// export const startRemoveVolume = async (code, bookId) => {
//   const instance = bookshelfEditConfiguration(bookId);
//   await instance.post(`/${code}/removeVolume`)
//     .then(response => console.log(response))
//     .catch(err => console.log(err));
// }

// export const startRemoveAllVolumes = async (code) => {
//   const instance = bookshelfEditConfiguration();
//   await instance.post(`/${code}/clearVolumes`)
//     .then(response => console.log(response))
//     .catch(err => console.log(err));
// }
