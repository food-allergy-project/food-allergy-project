import {connect} from "../database.utils";
import {RecipeAllergy} from "../interfaces/RecipeAllergy";
import {RowDataPacket} from "mysql2";


export async function selectRecipeAllergyByPrimaryKey(recipeAllergyRecipeId: string, recipeAllergyProfileId: string) : Promise<RecipeAllergy | null> {
    try {
        const mySqlConnection = await connect();
        const mySqlQuery : string = "SELECT BIN_TO_UUID(recipeAllergyRecipeId) as recipeAllergyRecipeId, BIN_TO_UUID(recipeAllergyProfileId) as recipeAllergyProfileId FROM recipeAllergy WHERE recipeAllergyRecipeId = UUID_TO_BIN(:recipeAllergyRecipeId) and recipeAllergyProfileId = UUID_TO_BIN(:recipeAllergyProfileId)"
        const result: RowDataPacket[] = await mySqlConnection.execute(mySqlQuery, {recipeAllergyRecipeId,recipeAllergyProfileId}) as RowDataPacket[]
        const rows: RecipeAllergy[] = result[0] as RecipeAllergy[]
        return  rows.length !== 0 ? {...rows[0]} : null;

    } catch (error) {
        throw error
    }
}