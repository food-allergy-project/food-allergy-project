import { Comment } from '../interfaces/Comment'
import { connect } from '../database.utils'

export async function insertComment (comment: Comment): Promise<string> {
    const mySqlConnection = await connect()
    const mySqlQuery = 'INSERT INTO comment(commentId, commentProfileId, commentRecipeId, commentContent, commentDate ) VALUES(UUID_TO_BIN(UUID()), UUID_TO_BIN(:commentProfileId), UUID_TO_BIN(:commentRecipeId), :commentContent, NOW())'
    await mySqlConnection.execute(mySqlQuery, comment)
    await mySqlConnection.release()
    return 'Comment created successfully'
}