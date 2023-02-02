import axios from "axios";
import { GET_PACKS, DELETE_PACK, ADD_PACK } from "./types";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
//GET PACK
export const getPacks = () => (dispatch, getState) => {
  axios
    .get("/api/packs/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PACKS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
// DELETE Pack
export const deletePack = (id) => (dispatch, getState) => {
  axios
    .delete(`api/packs/${id}`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deletePack: "Pack Deleted" }));
      dispatch({
        type: DELETE_PACK,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
// ADD Pack
export const add_pack = (pack) => (dispatch, getState) => {
  axios
    .post("api/packs/", pack, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addPack: "Pack Added" }));
      dispatch({
        type: ADD_PACK,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
