import {connect} from "../database.utils";
import {RecipeAllergy} from "../interfaces/RecipeAllergy";

export async function deleteRecipeAllergy (recipeAllergy : RecipeAllergy): Promise<string> {
    const mySqlConnection = await connect()
    const mySqlDelete = 'DELETE FROM `recipeAllergy` WHERE recipeAllergyRecipeId = UUID_TO_BIN(:recipeAllergyRecipeId) AND recipeAllergyProfileId = UUID_TO_BIN(:recipeAllergyProfileId)'
    await mySqlConnection.execute(mySqlDelete, recipeAllergy)
    await mySqlConnection.release()
    return 'RecipeAllergy successfully deleted'

}