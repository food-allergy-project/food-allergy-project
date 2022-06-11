import recipes from './recipes'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import auth from "./auth";
import allergies from "./allergies";
import favoritedRecipes from "./favoritedRecipes";
import profiles from "./profiles";



const reducer = combineReducers({recipes,auth, profiles, allergies, favoritedRecipes,})


export const store = configureStore({reducer})