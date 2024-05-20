'use client'
import { createStore } from "redux";
import rootred from "../redux/Reducers/main";


export const store = createStore(
    rootred
);
