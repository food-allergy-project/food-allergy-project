import { connect } from '../database.utils'
import { FavoritedRecipes } from '../interfaces/FavoritedRecipes'

export async function deletefavoritedRecipes (favoritedRecipes: FavoritedRecipes): Promise<string> {
    const mySqlConnection = await connect()
    const mySqlDelete = 'DELETE FROM `favoritedRecipes` WHERE favoritedRecipeProfileId = UUID_TO_BIN(:favoritedRecipeProfileId) AND favoritedRecipeRecipeId = UUID_TO_BIN(:favoritedRecipeRecipeId)'
    await mySqlConnection.execute(mySqlDelete, favoritedRecipes)
    await mySqlConnection.release()
    return 'Favorite successfully deleted'
}