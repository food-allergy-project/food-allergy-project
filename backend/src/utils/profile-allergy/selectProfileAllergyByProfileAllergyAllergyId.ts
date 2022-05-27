import {connect} from "../database.utils";
import {ProfileAllergy} from '../interfaces/ProfileAllergy';
import {RowDataPacket} from 'mysql2';


export async function selectProfileAllergyByProfileAllergyAllergyId(profileAllergyAllergyId: string) : Promise< ProfileAllergy[]> {
    const mysqlConnection = await connect();
    const mysqlQuery : string = "SELECT BIN_TO_UUID(profileAllergyAllergyId) as profileAllergyAllergyId, BIN_TO_UUID(profileAllergyProfileId) as profileAllergyProfileId FROM profileAllergy WHERE profileAllergyAllergyId = UUID_TO_BIN(:profileAllergyAllergyId)"
    const result = await mysqlConnection.execute(mysqlQuery,{profileAllergyAllergyId}) as RowDataPacket[]
    await mysqlConnection.release()
    return result[0] as ProfileAllergy[]
}