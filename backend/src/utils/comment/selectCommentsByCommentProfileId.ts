import { Comment } from '../interfaces/Comment'
import { connect } from '../database.utils'
import { RowDataPacket } from 'mysql2'

export async function selectCommentsByCommentProfileId (commentProfileId: string): Promise<Comment[]> {
    const mySqlConnection = await connect()
    const mySqlQuery = 'SELECT BIN_TO_UUID(commentId) AS commentId, BIN_TO_UUID (commentProfileId) AS commentProfileId,BIN_TO_UUID (commentRecipeId) AS commentRecipeId, commentContent, commentDate, profile.profileFullName FROM comment INNER JOIN profile ON profile.profileId = comment.commentProfileId WHERE commentProfileId = UUID_TO_BIN(:commentProfileId) ORDER BY commentDate DESC'
    const result = await mySqlConnection.execute(mySqlQuery, { commentProfileId }) as RowDataPacket
    await mySqlConnection.release()
    return result[0] as Comment[]
}
