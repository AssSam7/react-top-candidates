import CandiateActionTypes from "../constants/candidate.types";

const INITIAL_STATE = {
  candidates: [],
  shortListedCandidates: [],
  rejectedCandidates: [],
};

const candidateReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CandiateActionTypes.GET_CANDIDATES:
      return action.payload;

    default:
      return { ...state };
  }
};

export default candidateReducer;
