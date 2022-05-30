import { Comment} from '../interfaces/Comment'
import { connect } from '../database.utils'
import { RowDataPacket } from 'mysql2'

export async function selectCommentByCommentId (commentId: string): Promise<Comment|null> {
    const mySqlConnection = await connect()
    const mySqlQuery = 'SELECT BIN_TO_UUID(commentId) AS commentId, BIN_TO_UUID (commentProfileId) AS commentProfileId,BIN_TO_UUID (commentRecipeId) AS commentRecipeId, commentContent, commentDate from comment WHERE commentId = UUID_TO_BIN(:commentId)'
    const result = await mySqlConnection.execute(mySqlQuery, { commentId }) as RowDataPacket[]
    const comments: Comment[] = result[0] as Comment[]
    await mySqlConnection.release()
    return comments.length === 1 ? { ...comments[0] } : null
}
