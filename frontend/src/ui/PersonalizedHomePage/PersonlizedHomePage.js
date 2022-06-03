import React from "react";
import {PostRecipeButton} from "./PostRecipeButton";
import {PersonalizedInfo} from "./PersonalizedInfo";
import {RecipeCategories} from "./RecipeCategories";
import {SuggestedRecipes} from "./SuggestedRecipes";

export const PersonlizedHomePage = () => {
    return(
        <>
            <PostRecipeButton/>
            <PersonalizedInfo/>
            <RecipeCategories/>
            <SuggestedRecipes/>
        </>
    )
}