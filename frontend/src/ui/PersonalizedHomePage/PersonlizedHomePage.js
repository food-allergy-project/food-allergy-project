import React from "react";
import {PostRecipeButton} from "./PostRecipeButton";
import {PersonalizedInfo} from "./PersonalizedInfo";
import {RecipeCategories} from "./RecipeCategories";
import {SuggestedRecipes} from "./SuggestedRecipes";
import {RefreshRecipesButton} from "./RefreshButton";

export const PersonalizedHomePage = () => {
    return(
        <>
            <PostRecipeButton/>
            <PersonalizedInfo/>
            <RecipeCategories/>
            <RefreshRecipesButton/>
            <SuggestedRecipes/>
        </>
    )
}