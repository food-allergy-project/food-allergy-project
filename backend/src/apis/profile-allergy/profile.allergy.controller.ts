import {Request, Response} from "express";
import { Profile } from "../../utils/interfaces/Profile";
import {ProfileAllergy} from "../../utils/interfaces/ProfileAllergy";
import {Status} from "../../utils/interfaces/Status";
import { insertProfileAllergy } from "../../utils/profile-allergy/insert-profile-allery";
import {selectProfileAllergyByPrimarykey} from "../../utils/profile-allergy/selectProfileAllergyByPrimarykey"
import {selectPartialProfileAllergtByProfileAllergyProfileId} from "../../utils/profile-allergy/selectPartialProfileAllergyByProfileAllergyProfileId"

//post ProfileAllergy

export async function postProfileAllergyController(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileAllergyAllergyId} = request.body
        const profile = request.session.profile as Profile
        const profileAllergyProfileId = profile.profileId as string
        const profileAllergy : ProfileAllergy = {profileAllergyAllergyId, profileAllergyProfileId}

        const message = await insertProfileAllergy(profileAllergy)
        return response.json({status:200, data: null, message})

    }catch (e) {
        console.error(e)
        return response.json({status:500, data: null, message: 'internal server error please try again.'})
    }
}

//get profileAllergy
export async function getProfileAllergyByPrimaryKey(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileAllergyAllergyId} = request.params;
        const profile = request.session.profile as Profile
        const profileAllergyProfileId = profile.profileId as string
        const mySqlResult = await selectProfileAllergyByPrimarykey(profileAllergyAllergyId, profileAllergyProfileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))
    }
}

//delete ProfileAllergy
export async function deleteProfileAllergy(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileAllergyAllergyId} = request.params;
        const profile = request.session.profile as Profile
        const profileAllergyProfileId = profile.profileId as string
        const mySqlResult = await selectProfileAllergyByPrimarykey(profileAllergyAllergyId, profileAllergyProfileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))

    }
}


// get profileAllergyProfileId
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


