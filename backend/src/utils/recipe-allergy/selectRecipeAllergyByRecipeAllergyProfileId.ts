import {connect} from "../database.utils";
import {RowDataPacket} from "mysql2";
import {RecipeAllergy} from "../interfaces/RecipeAllergy";

export async function selectRecipeAllergyByRecipeAllergyProfileId (recipeAllergyProfileId: string) : Promise<RecipeAllergy[]> {
    const mySqlConnection = await connect();
    const mySqlQuery : string = "SELECT BIN_TO_UUID(recipeAllergyRecipeId) as recipeAllergyRecipeId, BIN_TO_UUID(recipeAllergyProfileId) as recipeAllergyProfileId FROM recipeAllergy WHERE recipeAllergyProfileId = UUID_TO_BIN(:recipeAllergyProfileId)"
    const result = await mySqlConnection.execute(mySqlQuery,{recipeAllergyProfileId}) as RowDataPacket[]
    await mySqlConnection.release()
    return result[0] as RecipeAllergy[]
    console.log(mySqlQuery)
}