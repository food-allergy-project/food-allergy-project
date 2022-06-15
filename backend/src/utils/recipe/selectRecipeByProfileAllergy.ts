import { RowDataPacket } from 'mysql2/promise'
import { Recipe } from '../interfaces/Recipe'
import {connect} from "../../database";

const validator = require("validator")

export async function selectRecipeByProfileAllergy(profileId:string) : Promise<Recipe[]> {
    const mysqlConnection = await connect()
    const mysqlQuery = 'select BIN_TO_UUID(recipeId) as recipeId, BIN_TO_UUID(recipeProfileId) as recipeProfileId, recipeCategory, recipeDate, recipeIngredients, recipeImage, recipeImageAlt, recipeInstructions, recipeTitle from recipe inner join recipeAllergy on recipe.recipeId = recipeAllergy.recipeAllergyRecipeId where recipeAllergy.recipeAllergyAllergyId in((select profileAllergyAllergyId from profileAllergy where profileAllergyProfileId = UUID_TO_BIN(:profileId))) group by recipeId'
    const result = await mysqlConnection.execute(mysqlQuery, {profileId}) as RowDataPacket[]
    await mysqlConnection.release()

    //Added for post recipe
    // const recipe: Recipe[] = []
    // for (const row of result[0] as RowDataPacket[]){
    //     const {recipeId, recipeProfileId, recipeCategory, recipeDate, recipeIngredients, recipeImage, recipeImageAlt, recipeInstructions, recipeTitle} = row
    // console.log(recipeIngredients)
    //     recipe.push({recipeId, recipeProfileId, recipeCategory, recipeDate, recipeIngredients: JSON.parse(recipeIngredients), recipeImage, recipeImageAlt, recipeInstructions: JSON.parse(recipeInstructions), recipeTitle})
    //
    // }

    return result[0] as Recipe[]
}
