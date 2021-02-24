import { ADD_TO_CART } from "./productTypes";
import { DELETE_PRODUCT } from "./productTypes";

const initialState = {
  cart: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //   return {
      //     ...state,
      //     cart: [...state.cart, action.payload],
      //   };
      // or
      const clonedCart = [...state.cart];
      clonedCart.push(action.payload);
      return {
        ...state,
        cart: clonedCart,
      };
    case DELETE_PRODUCT:
      const clonedCart2 = [...state.cart];
      const index = clonedCart2.indexOf(action.payload);
      if (index > -1) {
        clonedCart2.splice(index, 1);
      }
      return {
        ...state,
        cart: clonedCart2,
      };
    default:
      return state;
  }
};

export default productReducer;
