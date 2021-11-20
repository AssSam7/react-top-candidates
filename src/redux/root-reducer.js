import { combineReducers } from "redux";

import candidateReducer from "./candidate/reducers/candidate.reducer";

const rootReducer = combineReducers({
  candidates: candidateReducer,
});

export default rootReducer;
