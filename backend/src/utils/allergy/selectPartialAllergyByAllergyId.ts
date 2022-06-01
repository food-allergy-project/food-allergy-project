import {connect} from "../database.utils";
import {PartialProfile, Profile} from '../interfaces/Allergy';
import {RowDataPacket} from 'mysql2';

export async function selectPartialAllergyByAllergyId(allergyId: string) : Promise<PartialAllergy|null> {
    try {
            const mysqlConnection = await connect();
            const mysqlQuery : string = "SELECT BIN_TO_UUID(allergyId) as allergyId, allergyName FROM allergy WHERE allergyId = UUID_TO_BIN(:allergyId)"
            const result: RowDataPacket[] = await mysqlConnection.execute(mysqlQuery, {allergyId}) as RowDataPacket[]
            const rows: PartialAllergy[] = result[0] as PartialAllergy[]
            return rows.length !== 0 ? {...rows[0]} : null;
        } catch (error) {
            throw error
        }
    }
}