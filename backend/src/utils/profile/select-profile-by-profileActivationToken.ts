import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";
import {RowDataPacket} from 'mysql2';


export async function selectProfileByProfileActivationToken(profileActivationToken: string): Promise<Profile|null> {
    try {
        console.log(profileActivationToken)
        const mysqlConnection = await connect();
        const mysqlQuery: string = "SELECT BIN_TO_UUID(profileId) as profileId, profileFullName, profileEmail FROM profile WHERE profileActivationToken = :profileActivationToken"
        const result = await mysqlConnection.execute(mysqlQuery ,{profileActivationToken}) as RowDataPacket[]
        const rows: Profile[]  = result[0] as Profile[]
        await mysqlConnection.release()
        return rows.length === 1 ? {...rows[0]} : null;
    }  catch (error) {
        throw error
    }
}