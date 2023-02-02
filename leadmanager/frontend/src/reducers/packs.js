import {
  GET_PACKS,
  DELETE_PACK,
  ADD_PACK,
  CLEAR_PACKS,
} from "../actions/types.js";

const initialState = {
  packs: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PACKS:
      return {
        ...state,
        packs: action.payload,
      };
    case DELETE_PACK:
      return {
        ...state,
        packs: state.packs.filter((pack) => pack.id !== action.payload),
      };
    case ADD_PACK:
      return {
        ...state,
        packs: [...state.packs, action.payload],
      };
    case CLEAR_PACKS:
      return {
        ...state,
        packs: [],
      };
    default:
      return state;
  }
}
