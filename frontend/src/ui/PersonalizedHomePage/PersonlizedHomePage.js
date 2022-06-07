import React from "react";
import {PostRecipeButton} from "./PostRecipeButton";
import {PersonalizedInfo} from "./PersonalizedInfo";
import {RecipeCategories} from "./RecipeCategories";
import {SuggestedRecipes} from "./SuggestedRecipes";
import {RefreshRecipesButton} from "./RefreshButton";
import {useDispatch, useSelector} from "react-redux";
import  {fetchAllRecipes} from "../../store/recipes";

export const PersonalizedHomePage = () => {
    const dispatch = useDispatch()
    const initialEffects = () => {
        dispatch(fetchAllRecipes())
    }
    React.useEffect(initialEffects, [dispatch])

    // use the misquotes data from the store
    const recipes = useSelector((state) => state.recipes ? state.recipes : [])

    return(
        <>
            <PostRecipeButton/>
            <PersonalizedInfo/>
            <RecipeCategories/>
            <RefreshRecipesButton/>
            <SuggestedRecipes recipes = {recipes}/>
        </>
    )
}