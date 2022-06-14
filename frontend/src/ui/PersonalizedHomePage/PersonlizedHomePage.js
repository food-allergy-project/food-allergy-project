import React, {useEffect} from "react";
import {PersonalizedInfo} from "./PersonalizedInfo";
import {RecipeCategories} from "./RecipeCategories";
import {SuggestedRecipes} from "./SuggestedRecipes";
import {useDispatch, useSelector} from "react-redux";
import  {fetchAllRecipes} from "../../store/recipes";
import {PostRecipeButton} from "./PostRecipe/PostRecipeButton";
import {fetchAuth} from "../../store/auth";
import {fetchAllAllergies} from "../../store/allergies";


export const PersonalizedHomePage = () => {
    const auth = useSelector(state => state.auth);

    //to do: grab allergies from Redux using useSelector
    const allergies = useSelector(state => state.allergies);

    console.log(auth)
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchAllRecipes());
        dispatch(fetchAuth());

        //to do: dispatch(fetchAllAllergies());
        dispatch(fetchAllAllergies());
    };

    const inputs = [];
    useEffect(effects, inputs);


    React.useEffect(effects, [dispatch])
    const recipes = useSelector((state) => state.recipes ? state.recipes : [])

    return(
        <>
            {/*to do: pass allergies through PostRecipeButton to postRecipeForm*/}
            {auth && <PostRecipeButton profileId = {auth.profileId} allergies={allergies}/>}
            <PersonalizedInfo  profile={auth}/>
            <RecipeCategories/>
            <SuggestedRecipes recipes = {recipes}/>

        </>
    )
}