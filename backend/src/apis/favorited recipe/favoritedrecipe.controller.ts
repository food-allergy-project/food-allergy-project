import {Request, Response} from 'express';
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {selectfavoritedRecipeByPrimaryKey} from "../../utils/favorited recipe/selectfavoritedRecipeByPrimaryKey";
import {deletefavoritedRecipes} from "../../utils/favorited recipe/deletefavoritedRecipe";
import {insertfavoritedRecipes} from "../../utils/favorited recipe/insertfavoritedRecipe";
import {FavoritedRecipes} from "../../utils/interfaces/FavoritedRecipes";


export async function getfavoritedRecipeByPrimaryKey (request: Request, response: Response): Promise<Response>{
    try {
        const { favoritedRecipeRecipeId } = request.params
        const profile = request.session.profile as Profile
        const favoritedRecipeProfileId = profile.profileId as string

        const data = await selectfavoritedRecipeByPrimaryKey(favoritedRecipeRecipeId, favoritedRecipeProfileId)
        return response.json({ status: 200, message: null, data })
    } catch (error) {
        return response.json({
            status: 500,
            message: '',
            data: []
        })
    }
}

export async function togglefavoritedRecipeController(request: Request, response: Response): Promise<Response<string>> {

    try {

        const {favoritedRecipeRecipeId} = request.body;
        const profile = <Profile>request.session.profile
        const favoritedRecipeProfileId = <string>profile.profileId

        const favoritedRecipes: FavoritedRecipes = {
            favoritedRecipeProfileId,
            favoritedRecipeRecipeId,
        }
        const status: Status = {
            status: 200,
            message: '',
            data: null
        }

        const selectedfavoritedRecipes: FavoritedRecipes|null = await selectfavoritedRecipeByPrimaryKey(favoritedRecipeRecipeId, favoritedRecipeProfileId)
        if (selectedfavoritedRecipes === null){
            status.message = await insertfavoritedRecipes(favoritedRecipes)
        } else {
            status.message = await deletefavoritedRecipes(favoritedRecipes)
        }

        return response.json(status)
    } catch (error: any) {
        return (response.json({ status: 500, data: null, message: error.message }))
    }
}
