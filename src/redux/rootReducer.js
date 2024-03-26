import { combineReducers } from "redux";

import theme from "./reducers/themeReducer";
import userReducer from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";
import socketReducer from "./reducers/socketReducer";
import notificationReducer from "./reducers/notificationReducer";
import formReducer from "./reducers/formsReducer";

const rootReducer = combineReducers({
  theme,
  userReducer,
  postReducer,
  socketReducer,
  notificationReducer,
  formReducer,
});

export default rootReducer;
