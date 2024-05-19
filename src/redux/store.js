// import { configureStore } from '@reduxjs/toolkit' 
// import { cartSlice } from './cartSlice'
// // import { createStore } from "redux";
// import rootred from "../redux/Reducers/main";


// export const store = configureStore({
//   reducer: {
//     cart : cartSlice,
//     rootred
//   },
// })



// export default store;

import { createStore } from "redux";
import rootred from "../redux/Reducers/main";


export const store = createStore(
    rootred
);