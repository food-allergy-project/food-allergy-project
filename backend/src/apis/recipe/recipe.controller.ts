import {Request, Response} from "express";
import {Status} from "../../utils/interfaces/Status";
import { Recipe } from "../../utils/interfaces/Recipe";
import { updateRecipe } from "../../utils/recipe/updateRecipe";
import { insertRecipe } from "../../utils/recipe/insert.recipe";
import { selectRecipeByRecipeId } from "../../utils/recipe/selectRecipeByRecipeId";
import { selectAllRecipes } from "../../utils/recipe/selectAllRecipe";
import { Profile } from "../../utils/interfaces/Profile";
import { profile } from "console";
import {selectRecipeByFavoritedProfileId} from "../../utils/recipe/selectRecipeByFavoritedProfileId";
import {
    selectProfileAllergyByProfileAllergyProfileId
} from "../../utils/profile-allergy/selectProfileAlleryByProfileAllergyProfileId";
import {commentValidator} from "../comment/comment.validator";
import {selectRecipeByRecipeProfileId} from "../../utils/recipe/selectRecipeByRecipeProfileId";
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

// GET All Recipes By ProfileId
export async function getAllRecipeByRecipeProfileId(request: Request, response: Response) : Promise<Response> {
    try {
        const {recipeProfileId} = request.params;
        const data = await selectRecipeByRecipeProfileId(recipeProfileId);
        return response.json({status: 200, data, message: null})

    } catch (error) {
        return (response.json({status: 500, data: [], message: null}))
    }
}


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
        
        const {recipeTitle, recipeImageAlt, recipeInstructions, recipeIngredients, recipeCategory, recipeImage} = request.body
        
        const profile: Profile = request.session.profile as Profile
        const recipeProfileId: string = profile.profileId as string
        
        const recipe: Recipe = {recipeId:null, recipeProfileId, recipeCategory,recipeDate:null, recipeIngredients, recipeImage, recipeImageAlt, recipeInstructions, recipeTitle}

        const result = await insertRecipe(recipe)
        const status: Status = {status: 200,message: result, data: null}
        
        return response.json(status)

    } catch (error: any) {
        return response.json( {status:400, data: null, message: error.message})
    }
}



export async function getRecipeByFavoriteProfileId(request: Request, response: Response) : Promise<Response> {
    try {
  /*      const {profileId} = request.params;*/
        const profile = request.session.profile as Profile
        const profileId = profile.profileId as string
        const data = await selectRecipeByFavoritedProfileId(profileId);

        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))
    }
}
