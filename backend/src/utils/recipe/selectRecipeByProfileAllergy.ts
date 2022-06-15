import { RowDataPacket } from 'mysql2/promise'
import { Recipe } from '../interfaces/Recipe'
import {connect} from "../../database";


export async function selectRecipeByProfileAllergy(profileId:string) : Promise<Recipe[]> {
    const mysqlConnection = await connect()
    const mysqlQuery = 'select BIN_TO_UUID(recipeId) from recipe inner join recipeAllergy on recipe.recipeId = recipeAllergy.recipeAllergyRecipeId where recipeAllergy.recipeAllergyAllergyId in((select profileAllergyAllergyId from profileAllergy where profileAllergyProfileId = UUID_TO_BIN(:profileId)))'
    const result = await mysqlConnection.execute(mysqlQuery, {profileId}) as RowDataPacket[]
    await mysqlConnection.release()
    return result[0] as Recipe[]
}
