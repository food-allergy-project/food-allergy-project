import recipes from './recipes'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import auth from "./auth";
import allergies from "./allergies";
import favoritedRecipes from "./favoritedRecipes";
import profiles from "./profiles";
import profilePostedRecipes from "./profilePostedRecipes";


const reducer = combineReducers({recipes,auth, profiles, profilePostedRecipes, allergies, favoritedRecipes})


export const store = configureStore({reducer})