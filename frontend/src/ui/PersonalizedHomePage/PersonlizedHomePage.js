import React, {useEffect} from "react";
import {PersonalizedInfo} from "./PersonalizedInfo";
import {RecipeCategories} from "./RecipeCategories";
import {SuggestedRecipes} from "./SuggestedRecipes";
import {RefreshRecipesButton} from "./RefreshButton";
import {useDispatch, useSelector} from "react-redux";
import  {fetchAllRecipes} from "../../store/recipes";
import {PostRecipeButton} from "./PostRecipe/PostRecipeButton";
import {fetchAuth} from "../../store/auth";


export const PersonalizedHomePage = () => {
    const auth = useSelector(state => state.auth);
    console.log(auth)
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchAllRecipes());
        dispatch(fetchAuth());
    };

    const inputs = [];
    useEffect(effects, inputs);


    React.useEffect(effects, [dispatch])
    const recipes = useSelector((state) => state.recipes ? state.recipes : [])

    return(
        <>
            {auth && <PostRecipeButton profileId = {auth.profileId}/>}
            <PersonalizedInfo  profile={auth}/>
            <RecipeCategories/>
            <SuggestedRecipes recipes = {recipes}/>

        </>
    )
}