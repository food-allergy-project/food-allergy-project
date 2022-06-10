import recipes from './recipes'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import auth from "./auth";
import profiles from "./profiles";
import profilePostedRecipes from "./profilePostedRecipes";

const reducer = combineReducers({recipes,auth, profiles, profilePostedRecipes})

export const store = configureStore({reducer})