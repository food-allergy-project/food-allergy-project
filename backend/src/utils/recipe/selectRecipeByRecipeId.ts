import {Recipe} from "../interfaces/Recipe"
import {connect} from "../../database";
import { RowDataPacket } from 'mysql2/promise'

export async function selectRecipeByRecipeId(recipeId: string): Promise<Recipe|null> {
    const mysqlConnection =  await connect()
    const mysqlQuery = 'SELECT BIN_TO_UUID(recipeId) as recipeId, BIN_TO_UUID(recipeProfileId) as recipeProfileId, recipeCategory, recipeDate, recipeIngredients, recipeImage, recipeImageAlt, recipeInstructions, recipeTitle FROM recipe WHERE recipeId = UUID_TO_BIN(:recipeId)'
    const result = await mysqlConnection.execute(mysqlQuery, {recipeId}) as RowDataPacket[]
    await mysqlConnection.release()
     const recipes: Recipe[] = result[0] as Recipe[]
    return recipes.length === 1 ? {...recipes[0]} : null

}