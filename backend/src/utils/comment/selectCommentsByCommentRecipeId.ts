import { Comment } from '../interfaces/Comment'
import { connect } from '../database.utils'
import { RowDataPacket } from 'mysql2'

export async function selectCommentsByCommentRecipeId (commentRecipeId: string): Promise<Comment[]> {
    const mySqlConnection = await connect();
    const mySqlQuery: string = "SELECT BIN_TO_UUID(commentId) AS commentId, BIN_TO_UUID (commentProfileId) AS commentProfileId,BIN_TO_UUID (commentRecipeId) AS commentRecipeId, commentContent, commentDate FROM comment WHERE commentRecipeId = UUID_TO_BIN(:commentRecipeId) ORDER BY commentDate DESC"
    const result = await mySqlConnection.execute(mySqlQuery, { commentRecipeId }) as RowDataPacket []
    await mySqlConnection.release()
    return result[0] as Comment[]
}
