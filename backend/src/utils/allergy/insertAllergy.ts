import {Allergy} from "../interfaces/Allergy"
import {connect} from "../../src/database"
export async function insertAllergy(allergy: Allergy) : Promise<string> {
    const mysqlConnection = await connect()
    const mysqlQuery = 'INSERT INTO allergy(allergyId, allergyName, allergyImage, allergyImageAlt) VALUES (UUID_TO_BIN(UUID()), :allergyName)'
    await mysqlConnection.execute(mysqlQuery, allergy)
    await mysqlConnection.release()
    return "allergy inserted successfully"

}