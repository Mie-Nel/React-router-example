const initialState = {
  isAuth: false,
  isValid: false,
  error: null
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return {
        ...state,
        isAuth: true
      };
    case "VALID":
      return {
        ...state,
        isValid: true
      };
    case "NOT_VALID":
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
}
