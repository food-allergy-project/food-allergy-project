import {Request, Response} from "express";
import {Profile} from "../../utils/interfaces/Profile";
import {RecipeAllergy} from "../../utils/interfaces/RecipeAllergy";
import {insertRecipeAllergy} from "../../utils/recipe-allergy/insertRecipeAllergy";
import {Status} from "../../utils/interfaces/Status";
import {selectRecipeAllergyByPrimaryKey} from "../../utils/recipe-allergy/selectRecipeAllergyByPrimaryKey";
import {
    selectRecipeAllergyByRecipeAllergyRecipeId
} from "../../utils/recipe-allergy/selectRecipeAllergyByRecipeAllergyRecipeId";
import {
    selectRecipeAllergyByRecipeAllergyProfileId
} from "../../utils/recipe-allergy/selectRecipeAllergyByRecipeAllergyProfileId";
import {deleteRecipeAllergy} from "../../utils/recipe-allergy/deleteRecipeAllergy";



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

// GET recipeAllergy

export async function getRecipeAllergyByPrimaryKey (request: Request, response: Response) : Promise<Response> {
    try {
        const {recipeAllergyRecipeId} = request.params;
        const profile = request.session.profile as Profile
        const recipeAllergyProfileId = profile.profileId as string

        const sqlResult = await selectRecipeAllergyByPrimaryKey (recipeAllergyProfileId,recipeAllergyRecipeId)
        const data = sqlResult ?? null
        const status : Status = {status: 200, data, message: null}
        return  response.json(status)
    } catch (error : any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

// GET recipeAllergyRecipeId
export async function getRecipeAllergyRecipeId (request: Request, response: Response) : Promise<Response> {
    try {
        const {recipeAllergyRecipeId} = request.params;
        const mySqlResult = await selectRecipeAllergyByRecipeAllergyRecipeId(recipeAllergyRecipeId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

// GET recipeAllergyProfileId
export async  function getRecipeAllergyProfileId (request: Request, response: Response) : Promise<Response> {
    try {
        const profile = request.session.profile as Profile
        const recipeAllergyProfileId = profile.profileId as string
        const mySqlResult = await selectRecipeAllergyByRecipeAllergyProfileId(recipeAllergyProfileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}

// DELETE recipeAllergy
export async function deleteRecipeAllergyController (request: Request, response: Response) : Promise<Response> {
    try {
        const {recipeAllergyRecipeId} = request.params;
        const profile = request.session.profile as Profile
        const recipeAllergyProfileId = profile.profileId as string

        const recipeAllergy: RecipeAllergy = {recipeAllergyRecipeId, recipeAllergyProfileId}
        const mySqlResult = await selectRecipeAllergyByPrimaryKey(recipeAllergyRecipeId, recipeAllergyProfileId)
        if (mySqlResult === null) {
            return response.json({status: 404, message: 'recipeAllergy does not exists', data: null})
        }
        const result = await deleteRecipeAllergy(recipeAllergy)
        const status: Status = {status: 200, message: result, data: null}
        return response.json(status)
    } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.message}))
    }
}
