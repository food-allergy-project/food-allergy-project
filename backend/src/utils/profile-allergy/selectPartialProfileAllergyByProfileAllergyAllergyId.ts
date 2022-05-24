import {connect} from "../database.utils";
import {PartialProfileAllergy, ProfileAllergy} from '../interfaces/ProfileAllergy';
import {RowDataPacket} from 'mysql2';


export async function selectPartialProfileAllergyByProfileAllergyAllergyId(profileAllergyAllergyId: string) : Promise<PartialProfileAllergy|null> {
    try {
        const mysqlConnection = await connect();
        const mysqlQuery : string = "SELECT BIN_TO_UUID(profileAllergyAllergyId) as profileAllergyAllergyId FROM profileAllergy WHERE profileAllergyAllergyId = UUID_TO_BIN(:profileAllergyAllergyId)"
        const result: RowDataPacket[] = await mysqlConnection.execute(mysqlQuery, {profileAllergyAllergyId}) as RowDataPacket[]
        const rows: PartialProfileAllergy[] = result[0] as PartialProfileAllergy[]
        return rows.length !== 0 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}