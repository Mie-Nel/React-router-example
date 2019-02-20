const initialState = {
  news: [],
  isLoading: false,
  errorLoading: null
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        news: action.news,
        isLoading: false
      };
    case "FETCH_FAILED":
      return {
        ...state,
        errorLoading: action.error
      };
    default:
      return state;
  }
}
