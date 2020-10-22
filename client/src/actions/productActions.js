import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_ERROR,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";
import axios from "axios";

const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const { data } = await axios.get("http://localhost:3001/product", {
      withCredentials: true,
    });
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: PRODUCT_LIST_ERROR, payload: err.message });
    console.log(err.message);
  }
};

export { listProducts };
