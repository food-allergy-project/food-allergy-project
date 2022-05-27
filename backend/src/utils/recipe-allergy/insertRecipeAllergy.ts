import {connect} from "../database.utils";
import {RecipeAllergy} from "../interfaces/RecipeAllergy";

export async function insertRecipeAllergy (recipeAllergy: RecipeAllergy) : Promise<string> {
    const mySqlConnection = await connect();
    const myQuery : string = 'INSERT INTO recipeAllergy(recipeAllergyRecipeId, recipeAllergyProfileId) VALUES (UUID_TO_BIN(:recipeAllergyRecipeId), UUID_TO_BIN(:recipeAllergyProfileId))';

    await mySqlConnection.execute(myQuery, recipeAllergy);
    await mySqlConnection.release()
    return 'Recipe Allergy Successfully Created'
}