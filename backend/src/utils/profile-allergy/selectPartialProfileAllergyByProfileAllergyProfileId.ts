import {connect} from "../database.utils";
import {PartialProfileAllergy, ProfileAllergy} from '../interfaces/ProfileAllergy';
import {RowDataPacket} from 'mysql2';


export async function selectPartialProfileAllergtByProfileAllergyProfileId(profileAllergyProfileId: string) : Promise<PartialProfileAllergy|null> {
    try {
        const mysqlConnection = await connect();
        const mysqlQuery : string = "SELECT BIN_TO_UUID(profileAllergyProfileId) as profileAllergyProfileId FROM profileAllergy WHERE profileAllergyProfileId = UUID_TO_BIN(:profileAllergyProfileId)"
        const result: RowDataPacket[] = await mysqlConnection.execute(mysqlQuery, {profileAllergyProfileId}) as RowDataPacket[]
        const rows: PartialProfileAllergy[] = result[0] as PartialProfileAllergy[]
        return rows.length !== 0 ? {...rows[0]} : null;
    } catch (error) {
        throw error
    }
}