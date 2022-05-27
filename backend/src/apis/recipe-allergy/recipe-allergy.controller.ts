import {Request, Response} from "express";
import {Profile} from "../../utils/interfaces/Profile";
import {RecipeAllergy} from "../../utils/interfaces/RecipeAllergy";



// POST recipeAllergy

export async function postRecipeAllergyController (request: Request, response: Response) : Promise<Response> {
    try {
        const {recipeAllergyRecipeId} = request.body
        const profile = request.session.profile as Profile
        const profileAllergyProfileId = profile.profileId as string

        const recipeAllergy : RecipeAllergy = {recipeAllergyRecipeId, profileAllergyProfileId}

        const message = await insertRecipeAllergy(recipeAllergy)
        return response.json({status: 200, data: null, message: ''})



    }
}