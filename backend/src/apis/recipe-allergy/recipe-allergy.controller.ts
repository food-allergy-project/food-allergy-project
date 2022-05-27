import {Request, Response} from "express";
import {Profile} from "../../utils/interfaces/Profile";
import {RecipeAllergy} from "../../utils/interfaces/RecipeAllergy";
import {insertRecipeAllergy} from "../../utils/recipe-allergy/insertRecipeAllergy";



// POST recipeAllergy

export async function postRecipeAllergyController (request: Request, response: Response) : Promise<Response> {
    try {
        const {recipeAllergyRecipeId} = request.body
        const profile = request.session.profile as Profile
        const recipeAllergyProfileId = profile.profileId as string

        const recipeAllergy : RecipeAllergy = {recipeAllergyRecipeId, recipeAllergyProfileId}

        const message = await insertRecipeAllergy(recipeAllergy)
        return response.json({status: 200, data: null, message: "Successfully Insert"})

    } catch (e) {
        console.error(e)
        return response.json({status: 500, data: null, message: 'internal server error please try again.'})
    }
}