import {connect } from '../database.utils'
import {RowDataPacket} from 'mysql2/promise'
import { Allergy } from '../interfaces/Allergy'

export async function selectAllAllergies() : Promise<Allergy[]> {
    const mysqlConnection = await connect()
    const mysqlQuery = 'SELECT BIN_TO_UUID(allergyId) as allergyId, allergyName, allergyImage, allergyImageAlt FROM allergy'
    const result = await mysqlConnection.execute(mysqlQuery) as RowDataPacket[]
    await mysqlConnection.release()
    return  result[0] as Allergy[]
}