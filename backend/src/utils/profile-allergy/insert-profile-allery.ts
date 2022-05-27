import {connect} from "../database.utils";
import {ProfileAllergy} from "../interfaces/ProfileAllergy";

export async function insertProfileAllergy(profileAllergy: ProfileAllergy) : Promise<string>{
    const mysqlConnection = await connect();
    const query : string = 'INSERT INTO profileAllergy(profileAllergyAllergyId, profileAllergyProfileId) VALUES (UUID_TO_BIN(:profileAllergyAllergyId),UUID_TO_BIN(:profileAllergyProfileId))';
    await mysqlConnection.execute(query, profileAllergy);
    await mysqlConnection.release()
    return 'Profile Allergy Successfully Created'
}