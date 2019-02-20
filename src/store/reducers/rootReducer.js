import { combineReducers } from "redux";
import appReducer from "./appReducer";
import newsReducer from "./newsReducer";

export default combineReducers({
  app: appReducer,
  news: newsReducer
});
