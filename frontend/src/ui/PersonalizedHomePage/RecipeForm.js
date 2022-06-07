import React from 'react';
import * as Yup from "yup";
import {Formik} from "formik";
import {RecipeFormContent} from "./RecipeFormContent";
import { useSelector, useDispatch } from 'react-redux'
import {httpConfig} from "../../utils/httpConfig";
import {fetchAllRecipes} from "../../store/recipes";


export const RecipeForm = () => {
    const recipe = {
        recipeContent: "",
    };

    const dispatch = useDispatch()

    const auth = useSelector(state => state.auth ? state.auth : null);

    const validator = Yup.object().shape({
        recipeContent: Yup.string()
            .required("recipe content is required"),
    });

    const submitRecipe = (values, {resetForm, setStatus}) => {
        const recipeProfileId = auth?.profileId ?? null
        const recipe = {recipeProfileId, ...values}
        httpConfig.post("/apis/recipe/", recipe)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        resetForm();
                        dispatch(fetchAllRecipes())
                    }
                    setStatus({message, type});
                }
            );
    };


    return (
        <Formik
            initialValues={recipe}
            onSubmit={submitRecipe}
            validationSchema={validator}
        >
            {RecipeFormContent}
        </Formik>

    )
};