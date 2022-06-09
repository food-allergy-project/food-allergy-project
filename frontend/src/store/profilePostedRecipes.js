import _ from "lodash";
import { createSlice } from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig";


const slice = createSlice({
    name: "recipes",
    initialState: [],
    reducers: {
        setInitialRecipes: (posts, action) => {
            return action.payload
        },
        setInitialRecipesByProfileId: (posts, action) => {
            return action.payload
        }
    }
})

export const {setInitialRecipes, setInitialRecipesByProfileId} = slice.actions


export const fetchRecipesByProfileRecipeId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/recipes/profileId/${id}`);
    dispatch(setInitialRecipesByProfileId(data))
}

export const fetchAllRecipesAndProfiles = () => async (dispatch, getState) => {
    await dispatch(setInitialRecipes)
    const ProfileIds = _.uniq(_.map(getState().recipes, "recipeProfileId"));
    ProfileIds.forEach(id => dispatch(fetchRecipesByProfileRecipeId(id)));

}

export default slice.reducer