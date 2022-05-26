import {connect} from "../database.utils";
import {ResultSetHeader, RowDataPacket} from 'mysql2';
import { Recipe } from "../interfaces/Recipe";

export async function updateRecipe(recipe: Recipe): Promise<string>  {
    try {
        console.log(recipe)
        const mysqlConnection = await connect();
        const query : string = 'UPDATE recipe SET recipeTitle = :recipeTitle, recipeInstructions = :recipeInstructions, recipeIngredients= :recipeIngredients, recipeImage = :recipeImage, recipeImageAlt =:recipeImageAlt, recipeCategory = :recipeCategory, recipeDate = :recipeDate WHERE recipeId = UUID_TO_BIN(:recipeId)';
        await mysqlConnection.execute(query, recipe)
        return 'Recipe successfully updated'
    } catch (error) {
        throw error
    }
}