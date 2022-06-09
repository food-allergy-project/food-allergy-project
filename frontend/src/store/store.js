import recipes from './recipes'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import auth from "./auth";
import allergies from "./allergies";
import favoritedRecipes from "./favoritedRecipes";


const reducer = combineReducers({recipes,auth,allergies, favoritedRecipes})
export const store = configureStore({reducer})