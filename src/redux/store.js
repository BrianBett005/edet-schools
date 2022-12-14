import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { getMyBlogsReducer } from "./reducers/blogReducers";
import { getSchoolEventsReducer } from "./reducers/eventReducers";
import { getFeaturedSchoolsReducer, searchSchoolsReducer } from "./reducers/schoolReducers";

// import { getAllSchoolsReducer } from "./reducers/schoolReducers";
import {
  updateUserReducer,
  userSigninReducer,
  userSignUpReducer,
} from "./reducers/userReducers";

const reducers = combineReducers({
  signInInfo: userSigninReducer,
  signup: userSignUpReducer,
  blogs: getMyBlogsReducer,
  schools: searchSchoolsReducer,
  updateUser: updateUserReducer,
  events: getSchoolEventsReducer,
  featured: getFeaturedSchoolsReducer,
});
const initialState = {
  signInInfo: {
    userInfo: localStorage.getItem("eSchooladminDetails")
      ? JSON.parse(localStorage.getItem("eSchooladminDetails"))
      : null,
  },
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
