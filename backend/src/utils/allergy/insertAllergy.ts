import {Allergy} from "../interfaces/Allergy"
import {connect} from "../../database";
export async function insertAllergy(allergy: Allergy) : Promise<string> {
    const mysqlConnection = await connect()
    const mysqlQuery = 'INSERT INTO allergy(allergyId, allergyImage, allergyImageAlt, allergyName) VALUES (UUID_TO_BIN(UUID()), :allergyImage, :allergyImageAlt, :allergyName)'
    await mysqlConnection.execute(mysqlQuery, allergy)
    await mysqlConnection.release()
    return "allergy inserted successfully"

}