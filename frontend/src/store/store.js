import recipes from './recipes'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import auth from "./auth";
import favoritedRecipes from "./favoritedRecipes";

const reducer = combineReducers({recipes,auth, favoritedRecipes})

export const store = configureStore({reducer})