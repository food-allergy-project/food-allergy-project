import { connect } from '../database.utils'
import {Comment} from "../interfaces/Comment";

export async function deleteComment (comment: Comment): Promise<string> {
    const mySqlConnection = await connect()
    const mySqlDelete = 'DELETE FROM `comment` WHERE commentId = UUID_TO_BIN(:commentId) AND commentProfileId = UUID_TO_BIN(:commentProfileId)'
    await mySqlConnection.execute(mySqlDelete, comment)
    await mySqlConnection.release()
    return 'comment successfully deleted'
}
