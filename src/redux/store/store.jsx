import { combineReducers} from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import CountReducer from '../reducers/countReducer';
import courseSummaryReducer from '../reducers/courseSummaryReducer';
 
const rootReducer = combineReducers({
  count: CountReducer,
});

const store = configureStore({
  reducer: {
    count: CountReducer,
    courseSummary: courseSummaryReducer,

  },
})

export default store;