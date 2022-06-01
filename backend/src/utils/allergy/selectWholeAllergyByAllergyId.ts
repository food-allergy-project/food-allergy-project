import {connect} from "../database.utils";
import {Allergy} from "../interfaces/Allergy";
import {RowDataPacket} from "mysql2";

export async function selectWholeAllergyByAllergyId(allergyId: string): Promise<Allergy|null> {
    try {
        const mysqlConnection = await connect ();
        const sqlQu
    }
}