import {connect} from "../database.utils";
import {Recipe} from "../interfaces/Recipe";
import {RowDataPacket} from "mysql2";

export async function selectRecipeByRecipeProfileId(recipeProfileId: string): Promise<Recipe|null> {
    const mysqlConnection =  await connect()
    const mysqlQuery = 'SELECT BIN_TO_UUID(recipeId) as recipeId, BIN_TO_UUID(recipeProfileId) as recipeProfileId, recipeCategory, recipeDate, recipeIngredients, recipeImage, recipeImageAlt, recipeInstructions, recipeTitle FROM recipe WHERE recipeProfileId = UUID_TO_BIN(:recipeProfileId)'
    const result = await mysqlConnection.execute(mysqlQuery, {recipeProfileId}) as RowDataPacket[]
    await mysqlConnection.release()
    const recipes: Recipe[] = result[0] as Recipe[]
    return recipes.length === 1 ? {...recipes[0]} : null
}