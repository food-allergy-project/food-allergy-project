import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";
import {RecipeAllergy} from "../interfaces/RecipeAllergy";

export async function selectRecipeAllergyByRecipeAllergyRecipeId (recipeAllergyRecipeId: string) : Promise<RecipeAllergy[]> {
    const mySqlConnection = await connect();
    const mySqlQuery : string = "SELECT BIN_TO_UUID(recipeAllergyRecipeId) as recipeAllergyRecipeId, BIN_TO_UUID(recipeAllergyAllergyId) as recipeAllergyProfileId FROM recipeAllergy WHERE recipeAllergyRecipeId = UUID_TO_BIN(:recipeAllergyRecipeId)"
    const result = await mySqlConnection.execute(mySqlQuery,{recipeAllergyRecipeId}) as RowDataPacket[]
    await mySqlConnection.release()
    return result[0] as RecipeAllergy[]
}