import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from '../utils/httpConfig'

// Define our reducer and action
const slice = createSlice({
    name: 'recipes',
    initialState: [],
    reducers: {
        setFavoritedRecipes: (recipes, action) => action.payload
    }
})

// Make our actions callable as function setAllMisquotes
export const {setFavoritedRecipes} = slice.actions

export default slice.reducer

// create an export to allow async calls to our action
export const fetchFavoritedRecipesByProfileId = () => async dispatch => {
    const {data} = await httpConfig('/apis/recipe/favorites/profile')
    dispatch(setFavoritedRecipes(data))
}