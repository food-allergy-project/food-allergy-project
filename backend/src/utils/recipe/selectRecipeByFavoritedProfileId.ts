
import { RowDataPacket } from 'mysql2/promise'
import { Recipe } from '../interfaces/Recipe'
import {connect} from "../../database";


export async function selectRecipeByFavoritedProfileId(profileId:string) : Promise<Recipe[]> {
    const mysqlConnection = await connect()
    const mysqlQuery = 'SELECT BIN_TO_UUID(recipeId) as recipeId, BIN_TO_UUID(recipeProfileId) as recipeProfileId, recipeCategory, recipeDate, recipeIngredients, recipeImage, recipeImageAlt, recipeInstructions, recipeTitle FROM recipe INNER JOIN favoritedRecipes  on recipe.recipeId = favoritedRecipes.favoritedRecipeRecipeId WHERE favoritedRecipes.favoritedRecipeProfileId = UUID_TO_BIN(:profileId)'
    const result = await mysqlConnection.execute(mysqlQuery, {profileId}) as RowDataPacket[]
    await mysqlConnection.release()
    return result[0] as Recipe[]
}

//SELECT BIN_TO_UUID(ticketId) as ticketId, BIN_TO_UUID(ticketProfileId) as ticketProfileId, BIN_TO_UUID(ticketProjectId) as ticketProjectId, ticketDueDate, ticketDescription, ticketName FROM ticket INNER JOIN recipeProfileId  on ticket.ticketId = ticketStatus.ticketStatusTicketId WHERE ticketStatus.ticketStatusStatusId = UUID_TO_BIN('3748e790-d14d-11ec-a6dd-0242ac1b0002');
