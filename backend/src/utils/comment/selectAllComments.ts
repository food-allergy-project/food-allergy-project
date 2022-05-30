import { Comment } from '../interfaces/Comment'
import { connect } from '../database.utils'
import { RowDataPacket } from 'mysql2'

export async function selectAllComments (): Promise<Comment[]> {
    const mySqlConnection = await connect()
    const mySqlQuery = 'SELECT BIN_TO_UUID(commentId) AS commentId, BIN_TO_UUID (commentProfileId) AS commentProfileId,BIN_TO_UUID (commentRecipeId) AS commentRecipeId, commentContent, commentDate FROM comment ORDER BY commentDate DESC'
    const result = await mySqlConnection.execute(mySqlQuery) as RowDataPacket[]
    await mySqlConnection.release()
    return result[0] as Comment[]
}
