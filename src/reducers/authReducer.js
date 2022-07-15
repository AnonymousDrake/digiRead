const initialState = {
  authError: undefined,
  authLoading: false,
  firstName: '',
  lastName: '',
  uid: undefined,
  photo: '',
  userEmail: '',
  accessToken: null,
  refreshToken: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        firstName: action.payload.userDetails.user.givenName,
        lastName: action.payload.userDetails.user.familyName,
        photo: action.payload.userDetails.user.photo,
        uid: action.payload.userDetails.user.id,
        userEmail: action.payload.userDetails.user.email,
        authLoading: false,
        authError: null,
        accessToken: action.payload.userLogin.access_token,
        refreshToken: action.payload.userLogin.refresh_token
          ? action.payload.userLogin.refresh_token
          : state.refreshToken,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        firstName: action.payload.givenName,
        lastName: action.payload.familyName,
        photo: action.payload.photo,
        uid: action.payload.id,
        userEmail: action.payload.email,
        authLoading: false,
        authError: null,
      };
    case 'LOGOUT':
      return initialState;
    case 'LOADING_ON':
      return {...state, authLoading: true, authError: null};
    case 'ERROR':
      return {...state, authError: action.payload, authLoading: false};
    default:
      return state;
  }
};
