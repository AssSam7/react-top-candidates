// import axios from "axios";

import CandiateActionTypes from "../constants/candidate.types";

export const getCandidates = (payload) => ({
  type: CandiateActionTypes.GET_CANDIDATES,
  payload,
});

export const clearCandidates = () => ({
  type: CandiateActionTypes.CLEAR_CANDIDATES,
});

export const getData = () => async (dispatch) => {
  try {
    const url =
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json";
    const response = await fetch(url);
    const responseBody = await response.json();
    console.log(responseBody);
    dispatch(getCandidates(responseBody));
  } catch (err) {
    console.error(err);
    dispatch(clearCandidates());
  }
};
