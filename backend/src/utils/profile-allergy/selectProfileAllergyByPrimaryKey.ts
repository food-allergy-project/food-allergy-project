import {connect} from "../database.utils";
import {PartialProfileAllergy, ProfileAllergy} from '../interfaces/ProfileAllergy';
import {RowDataPacket} from 'mysql2';


export async function selectProfileAllergyByPrimaryKey(profileAllergyAllergyId: string, profileAllergyProfileId: string) : Promise< ProfileAllergy| null> {
    try {
        const mysqlConnection = await connect();
        const mysqlQuery : string = "SELECT BIN_TO_UUID(profileAllergyAllergyId) as profileAllergyAllergyId, BIN_TO_UUID(profileAllergyProfileId) as profileAllergyProfileId FROM profileAllergy WHERE profileAllergyAllergyId = UUID_TO_BIN(:profileAllergyAllergyId) and profileAllergyProfileId = UUID_TO_BIN(:profileAllergyProfileId)"
        const result: RowDataPacket[] = await mysqlConnection.execute(mysqlQuery, {profileAllergyAllergyId,profileAllergyProfileId}) as RowDataPacket[]
        const rows: PartialProfileAllergy[] = result[0] as PartialProfileAllergy[]
        await mysqlConnection.release()
        return rows.length !== 0 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}