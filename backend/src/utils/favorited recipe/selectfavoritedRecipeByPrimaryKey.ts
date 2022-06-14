import { connect } from '../database.utils'
import {FavoritedRecipes, PartialFavoritedRecipes} from '../interfaces/FavoritedRecipes'
import { RowDataPacket } from 'mysql2'

export async function selectfavoritedRecipeByPrimaryKey (favoritedRecipeRecipeId: string, favoritedRecipeProfileId: string ): Promise<FavoritedRecipes|null> {
  const mysqlConnection = await connect()
  console.log(favoritedRecipeRecipeId, favoritedRecipeProfileId)
  const mySqlSelectQuery: string = 'SELECT BIN_TO_UUID(favoritedRecipeProfileId) as favoritedRecipeProfileId, BIN_TO_UUID(favoritedRecipeRecipeId) as favoritedRecipeRecipeId FROM favoritedRecipes WHERE favoritedRecipeProfileId = UUID_TO_BIN(:favoritedRecipeProfileId) AND favoritedRecipeRecipeId = UUID_TO_BIN(:favoritedRecipeRecipeId)'
  const result: RowDataPacket[] = await mysqlConnection.execute(mySqlSelectQuery, { favoritedRecipeRecipeId, favoritedRecipeProfileId}) as RowDataPacket[]
  const rows: PartialFavoritedRecipes[] = result[0] as PartialFavoritedRecipes[]
  return rows.length !== 0 ? {...rows[0]} : null;
}
