import { connect } from '../database.utils'
import {Comment} from "../interfaces/Comment";

export async function deleteComment (commentId: string): Promise<string> {
    const mySqlConnection = await connect()
    const mySqlDelete = 'DELETE FROM `comment` WHERE commentId = UUID_TO_BIN(:commentId)'
    await mySqlConnection.execute(mySqlDelete, {commentId})
    await mySqlConnection.release()
    return 'comment successfully deleted'
}
