import {connect} from "../database.utils";
import {ProfileAllergy} from '../interfaces/ProfileAllergy';
import {RowDataPacket} from 'mysql2';


export async function selectProfileAllergyByProfileAllergyProfileId(profileAllergyProfileId: string) : Promise< ProfileAllergy[]> {
        const mysqlConnection = await connect();
        const mysqlQuery : string = "SELECT BIN_TO_UUID(profileAllergyAllergyId) as profileAllergyAllergyId, BIN_TO_UUID(profileAllergyProfileId) as profileAllergyProfileId FROM profileAllergy WHERE profileAllergyProfileId = UUID_TO_BIN(:profileAllergyProfileId)"
        const result = await mysqlConnection.execute(mysqlQuery,{profileAllergyProfileId}) as RowDataPacket[]
        await mysqlConnection.release()
        return result[0] as ProfileAllergy[]
}