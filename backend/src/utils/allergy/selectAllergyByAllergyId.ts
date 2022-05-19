import {Allergy} from "../interfaces/Allergy"
import {connect} from "../../database";
import { RowDataPacket } from 'mysql2/promise'

export async function selectAllergyByAllergyId(allergyId: string): Promise<Allergy|null> {
    const mysqlConnection =  await connect()
    const mysqlQuery = 'SELECT BIN_TO_UUID(allergyId) as allergyId, allergyName FROM allergy WHERE allergyId = UUID_TO_BIN(:allergyId)'
    const result = await mysqlConnection.execute(mysqlQuery, {allergyId}) as RowDataPacket[]
    await mysqlConnection.release()
    const allergies: Allergy[] = result[0] as Allergy[]
    return allergies.length === 1 ? {...allergies[0]} : null

}