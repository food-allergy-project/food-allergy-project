import {connect} from "../database.utils";
import { Recipe } from "../interfaces/Recipe";

export async function insertRecipe(recipe: Recipe) : Promise<string> {
    console.log(recipe)
    const mysqlConnection = await connect();
    const mySqlquery : string = 'INSERT INTO recipe(recipeId, recipeProfileId, recipeCategory, recipeDate, recipeIngredients, recipeImage, recipeImageAlt, recipeInstructions,recipeTitle) VALUES (UUID_TO_BIN(UUID()), UUID_TO_BIN(:recipeProfileId), :recipeCategory, NOW(), :recipeIngredients, :recipeImage, :recipeImageAlt, :recipeInstructions, :recipeTitle)'
    await mysqlConnection.execute(mySqlquery, recipe);
    await mysqlConnection.release()
    return 'Recipe Successfully Created'
}