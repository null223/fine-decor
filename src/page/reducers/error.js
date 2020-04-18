import { RETURN_ERRORS } from "../actions/types";

const initialState = {
  msg: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RETURN_ERRORS:
      return {
        msg: action.payload,
      };
    default:
      return state;
  }
}