// import storeDataReducer from "../AuthComponents/reducers/storeDataReducer";
// import profileReducer from "../NavBarComponents/reducer/profileReducer";

import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
const appReducer = combineReducers({
  cartReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
