import axios from "axios";
import { LOADING_STATE, SET_MESSAGE, CATCH_ERROR } from "./actionTypes";

export const login = (user, history) => dispatch => {
  dispatch({ type: LOADING_STATE, payload: true });
  axios
    .post("/api/auth/login", user)
    .then(result => {})
    .catch(error => {
      console.log(error.response);
    });
};

export const registration = (user, history) => dispatch => {
  dispatch({ type: LOADING_STATE, payload: true });
  axios
    .post("http://localhost:8000/api/auth/register", user)
    .then(() => {
      console.log("sdfg");
      dispatch({ type: LOADING_STATE, payload: false });
      history.push("/login");
    })
    .catch(err => {
      let { message, errors } = err.response.data;
      console.log(message, errors);
      dispatch({ type: SET_MESSAGE, payload: message });
      dispatch({ type: CATCH_ERROR, payload: errors });
      dispatch({ type: LOADING_STATE, payload: false });
    });
};
