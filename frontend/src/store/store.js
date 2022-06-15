import recipes from './recipes'
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import auth from "./auth";
import allergies from "./allergies";
import favoritedRecipes from "./favoritedRecipes";
import profiles from "./profiles";
import profileAllergies from "./profileAllergies";



const reducer = combineReducers({recipes,auth, profiles, allergies, favoritedRecipes,profileAllergies})


export const store = configureStore({reducer})