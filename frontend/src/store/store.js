import recipes from './recipes'
import {combineReducers, configureStore} from '@reduxjs/toolkit'

const reducer = combineReducers({recipes})

export const store = configureStore({reducer})