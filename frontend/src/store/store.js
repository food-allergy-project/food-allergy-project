import recipes from './recipes'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import auth from "./auth";
import allergies from "./allergies";

const reducer = combineReducers({recipes,auth,allergies})

export const store = configureStore({reducer})