import { combineReducers} from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import CountReducer from '../reducers/countReducer';
import courseSummaryReducer from '../reducers/courseSummaryReducer';
 
const rootReducer = combineReducers({
  count: CountReducer,
  courseSummary: courseSummaryReducer,
});

const Store = configureStore({
  reducer: {
    courseSummary: courseSummaryReducer,
  },
})

export default Store;