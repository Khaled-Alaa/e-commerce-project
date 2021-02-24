import { ADD_TO_CART } from "./productTypes";
import { DELETE_PRODUCT } from "./productTypes";

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const deleteProduct = (product) => {
  return {
    type: DELETE_PRODUCT,
    payload: product,
  };
};