import { connect} from '../../../src/database'
import { RowDataPacket } from 'mysql2/promise'
import { Profile } from '../interfaces/Profile'

export async function selectAllProfiles() : Promise<Profile[]> {
    const mysqlConnection = await connect()
    const mysqlQuery = 'SELECT BIN_TO_UUID(profileId) as profileId, profileFullName, profileEmail FROM profile'
    const result = await mysqlConnection.execute(mysqlQuery) as RowDataPacket[]
    await mysqlConnection.release()
    return result[0] as Profile[]
}