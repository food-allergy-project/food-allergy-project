import { connect } from '../database.utils'
import { FavoritedRecipes } from '../interfaces/FavoritedRecipes'

export async function insertfavoritedRecipes (favoritedRecipes: FavoritedRecipes): Promise<string> {
    const mySqlConnection = await connect()
    const mySqlQuery = 'INSERT INTO `favoritedRecipes`(favoritedRecipeProfileId, favoritedRecipeRecipeId) VALUES(UUID_TO_BIN(:favoritedRecipeProfileId), UUID_TO_BIN(:favoritedRecipeRecipeId))'
    await mySqlConnection.execute(mySqlQuery, favoritedRecipes)
    await mySqlConnection.release()
    return 'Favorite successfully inserted'
}