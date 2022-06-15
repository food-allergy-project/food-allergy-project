import {connect} from "../database.utils";
import {RecipeAllergy} from "../interfaces/RecipeAllergy";

export async function insertRecipeAllergy (recipeAllergy: RecipeAllergy) : Promise<string> {
    const mySqlConnection = await connect();
    const myQuery : string = 'INSERT INTO recipeAllergy(recipeAllergyRecipeId, recipeAllergyAllergyId) VALUES (UUID_TO_BIN(:recipeAllergyRecipeId), UUID_TO_BIN(:recipeAllergyAllergyId))';

    await mySqlConnection.execute(myQuery, recipeAllergy);
    await mySqlConnection.release()
    return 'Recipe Allergy Successfully Created'
}