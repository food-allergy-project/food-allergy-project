import { connect } from '../database.utils'
import {ProfileAllergy} from "../interfaces/ProfileAllergy";

export async function deleteProfileAllergy (profileAllergy: ProfileAllergy): Promise<string> {
    const mySqlConnection = await connect()
    const mySqlDelete = 'DELETE FROM `profileAllergy` WHERE profileAllergyAllergyId = UUID_TO_BIN(:profileAllergyAllergyId) AND profileAllergyProfileId = UUID_TO_BIN(:profileAllergyProfileId)'
    await mySqlConnection.execute(mySqlDelete, profileAllergy)
    await mySqlConnection.release()
    return 'ProfileAllergy successfully deleted'
}