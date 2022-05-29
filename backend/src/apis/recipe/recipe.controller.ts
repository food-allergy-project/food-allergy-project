import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import { Recipe } from "../../utils/interfaces/Recipe";
import { updateRecipe } from "../../utils/recipe/updateRecipe";
import { insertRecipe } from "../../utils/recipe/insert.recipe";
import { selectRecipeByRecipeId } from "../../utils/recipe/selectRecipeByRecipeId";
import { selectAllRecipes } from "../../utils/recipe/selectAllRecipe";
import { Profile } from "../../utils/interfaces/Profile";
import { profile } from "console";
//import { deleteRecipeByRecipeId } from "../../utils/recipe/deleteRecipeByRecipeId";

export async function putRecipeController(request: Request, response: Response): Promise<Response> {
    try {
        const {recipeId} = request.params
        const {
            recipeTitle,
            recipeImageAlt,
            recipeImage,
            recipeInstructions,
            recipeIngredients,
            recipeDate,
            recipeCategory
        } = request.body
        
        const profile = request.session.profile as Profile
        const profileIdFromSession = profile.profileId as string
        const previousRecipe: Recipe|null = await selectRecipeByRecipeId(recipeId)

        if (previousRecipe === null){
           return  updateFailed("recipe doesn't exist")
        }
        
        if (previousRecipe.recipeProfileId !== profileIdFromSession){
            return updateFailed("You are not allowed to preform this task")
        }

        const newRecipe: Recipe = {...previousRecipe, recipeCategory, recipeTitle, recipeInstructions, recipeIngredients, recipeImage, recipeImageAlt}
        console.log("this is where i die ")
        await updateRecipe(newRecipe)
        return response.json({status: 200, data: null, message: "Recipe successfully updated"})
        
        function updateFailed(message: string): Response {
            return response.json({status: 400, data: null, message})

        }

    }   catch (error: any) {
    return(response.json({status: 400, data: null, message: error.message}))
}
}


export async function getRecipeByRecipeIdController(request: Request, response: Response) : Promise<Response> {
    try {
        const {recipeId} = request.params;
        const data = await selectRecipeByRecipeId(recipeId);
        return response.json({status: 200, data, message: null})

    } catch (error) {
        return (response.json({status: 500, data: null, message: 'internal server error please try again.'}))
    }
}
/*
export async function removeRecipeByRecipeId(request: Request, response: Response) : Promise<Response> {
    try {
        const {recipeId} = request.params;
        const mySqlResult = await deleteRecipeByRecipeId(recipeId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}*/

export async function getAllRecipeControllers(request: Request, response: Response) : Promise<Response> {
    try {
        const {recipeId} = request.params;
        const mySqlResult = await selectAllRecipes();
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))

    }

}

export async function postRecipeController(request: Request, response: Response) : Promise<Response> {
    try {
        
        const {recipeTitle, recipeImageAlt, recipeInstructions, recipeIngredients, recipeCategory} = request.body
        
        const profile: Profile = request.session.profile as Profile
        const recipeProfileId: string = profile.profileId as string
        
        const recipe: Recipe = {recipeId:null, recipeProfileId, recipeCategory,recipeDate:null, recipeIngredients, recipeImage:'URL', recipeImageAlt, recipeInstructions, recipeTitle}

        const result = await insertRecipe(recipe)
        const status: Status = {status: 200,message: result, data: null}
        
        return response.json(status)

    } catch (error: any) {
        return response.json( {status:400, data: null, message: error.message})
    }
}