import { createStore } from "redux";
import Reducer from "./product/productReducer";

const store = createStore(Reducer);

export default store;