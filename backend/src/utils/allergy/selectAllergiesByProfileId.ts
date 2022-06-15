import {connect} from "../database.utils";
import {Allergy} from "../interfaces/Allergy";
import {Profile} from "../interfaces/Profile";
import {RowDataPacket} from "mysql2";

export async function selectAllergiesByProfileId(profileId: string): Promise<Allergy[]> {
    try {
        const mysqlConnection = await connect();
        const sqlQuery: string = 'SELECT BIN_TO_UUID(allergyId) as allergyId, allergyImage, allergyImageAlt, allergyName FROM allergy INNER JOIN profileAllergy ON allergy.allergyId = profileAllergy.profileAllergyProfileId WHERE profileAllergy.profileAllergyAllergyId = UUID_TO_BIN(:ProfileId)'
        const result = await mysqlConnection.execute(sqlQuery, {profileId}) as RowDataPacket[]
        await mysqlConnection.release()
        return result[0] as Allergy[]

    } catch (error) {
        throw error
    }
}

// SELECT BIN_TO_UUID(ticketId) as ticketId, BIN_TO_UUID(ticketProfileId) as ticketProfileId, BIN_TO_UUID(ticketProjectId) as ticketProjectId, ticketDueDate, ticketDescription, ticketName FROM ticket INNER JOIN ticketStatus  on ticket.ticketId = ticketStatus.ticketStatusTicketId WHERE ticketStatus.ticketStatusStatusId = UUID_TO_BIN('3748e790-d14d-11ec-a6dd-0242ac1b0002');