import {connect} from "../database.utils";
import {Profile} from "../interfaces/Profile";

export async function insertProfile(profile: Profile) : Promise<string>{
        const mysqlConnection = await connect();
        const query : string = 'INSERT INTO profile(profileId, profileFullName, profileActivationToken, profileEmail, profileHash) VALUES (UUID_TO_BIN(UUID()), :profileFullName, :profileActivationToken, :profileEmail, :profileHash)';
        await mysqlConnection.execute(query, profile);
        await mysqlConnection.release()
        return 'Profile Successfully Created'
}