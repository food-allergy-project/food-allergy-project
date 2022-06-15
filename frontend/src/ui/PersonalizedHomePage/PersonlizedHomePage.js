import React, {useEffect} from "react";
import {PersonalizedInfo} from "./PersonalizedInfo";
import {RecipeCategories} from "./RecipeCategories";
import {SuggestedRecipes} from "./SuggestedRecipes";
import {useDispatch, useSelector} from "react-redux";
import {fetchRecipesByAllergiesAndProfile} from "../../store/recipes";
import {PostRecipeButton} from "./PostRecipe/PostRecipeButton";
import {fetchAuth} from "../../store/auth";
import {fetchAllergiesByProfileId} from "../../store/allergies";


export const PersonalizedHomePage = () => {
    const auth = useSelector(state => state.auth);


    const allergies = useSelector(state => state.allergies);


    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchRecipesByAllergiesAndProfile());
        dispatch(fetchAuth());
        dispatch(fetchAllergiesByProfileId());
    };


    const inputs = [];
    useEffect(effects, inputs);


    React.useEffect(effects, [dispatch])
    const recipes = useSelector((state) => state.recipes ? state.recipes : [])
    const profileAllergies = useSelector((state) => state.allergies ? state.allergies : []);

    return(
        <>
            {auth && <PostRecipeButton profileId = {auth.profileId} allergies={allergies}/>}
            {allergies && <PersonalizedInfo  profile={auth} profileAllergies = {profileAllergies} allergies={allergies} />}
            <RecipeCategories/>
            <SuggestedRecipes recipes = {recipes}/>

        </>
    )
}