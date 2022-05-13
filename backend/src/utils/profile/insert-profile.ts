import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function insertProfile(profile: Profile) : Promise<string>{
    try {
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO profile(profileId, profileFullName, profileActivationToken, profileEmail, profileHash) VALUES (UUID_TO_BIN(UUID()), :profileFullName, :profileActivationToken, :profileEmail, :profileHash)';
        await mysqlConnection.execute(query, profile);
        await mysqlConnection.end()
        return 'Profile Successfully Created'
    } catch (error) {
        throw error
    }
}