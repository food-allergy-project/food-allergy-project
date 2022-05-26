import { connect} from '../../../src/database'
import { RowDataPacket } from 'mysql2/promise'
import { Recipe } from '../interfaces/Recipe'


export async function selectAllRecipes() : Promise<Recipe[]> {
    const mysqlConnection = await connect()
    const mysqlQuery = 'SELECT BIN_TO_UUID(recipeId) as recipeId, recipeProfileId, recipeCategory, recipeDate, recipeIngredients, recipeImage, recipeImageAlt, recipeInstructions, recipeTitle FROM recipe'
    const result = await mysqlConnection.execute(mysqlQuery) as RowDataPacket[]
    await mysqlConnection.release()
    return result[0] as Recipe[]
}