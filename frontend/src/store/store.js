import recipes from './recipes'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import auth from "./auth";

const reducer = combineReducers({recipes,auth})

export const store = configureStore({reducer})