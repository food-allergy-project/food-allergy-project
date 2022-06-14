import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from '../utils/httpConfig'


// Define our reducer and action
const slice = createSlice({
    name: 'recipes',
    initialState: [],
    reducers: {
        setAllRecipes: (recipes, action) => action.payload,
        setRecipeByRecipeId: (recipes, action) => {
            recipes.unshift(action.payload)
        },
        setAllRecipeByRecipeProfileId: (recipes, action) => {
            recipes.unshift(action.payload)
        }
    },


})

// Make our actions callable as function setAllMisquotes
export const {setAllRecipes, setRecipeByRecipeId, setAllRecipeByRecipeProfileId} = slice.actions

export default slice.reducer

// create an export to allow async calls to our action
export const fetchAllRecipes = () => async dispatch => {
    const {data} = await httpConfig('/apis/recipe/')
    dispatch(setAllRecipes(data))
}

//=================================================================================//
export const fetchRecipeByRecipeId = (id) => async (dispatch) => {

        const { data } = await httpConfig(`/apis/recipe/${id}`)
        dispatch(setRecipeByRecipeId( data ))

}
//=================================================================================//
export const fetchAllRecipeByRecipeProfileId = (id) => async (dispatch) => {
    const { data } = await httpConfig(`/apis/recipe/recipeProfileId/${id}`)
    dispatch(setAllRecipeByRecipeProfileId( data ))
}