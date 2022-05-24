import {Request, Response} from "express";
import {PartialProfileAllergy, ProfileAllergy} from "../../utils/interfaces/ProfileAllergy";
import {Status} from "../../utils/interfaces/Status";
import {selectPartialProfileAllergyByProfileAllergyAllergyId} from "../../utils/profile-allergy/selectPartialProfileAllergyByProfileAllergyAllergyId"
import {selectPartialProfileAllergtByProfileAllergyProfileId} from "../../utils/profile-allergy/selectPartialProfileAllergyByProfileAllergyProfileId"

//getprofileAllergyAllergyId
export async function getProfileAllergyAllergyId(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileAllergyAllergyId} = request.params;
        const mySqlResult = await selectPartialProfileAllergyByProfileAllergyAllergyId(profileAllergyAllergyId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))
    }
}

//deleteProfileAllergyAllergyId
export async function deleteProfileAllergyAllergyId(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileAllergyAllergyId} = request.params;
        const mySqlResult = await selectPartialProfileAllergyByProfileAllergyAllergyId(profileAllergyAllergyId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))

    }
}


// getprofileAllergyProfileId
export async function getprofileAllergyProfileId(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileAllergyProfileId} = request.params;
        const mySqlResult = await selectPartialProfileAllergtByProfileAllergyProfileId(profileAllergyProfileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))
    }
}

//deleteProfileAllergyProfileId
export async function deleteProfileAllergyProfileId(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileAllergyProfileId} = request.params;
        const mySqlResult = await selectPartialProfileAllergtByProfileAllergyProfileId(profileAllergyProfileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))

    }
}
