import {Request, Response} from "express";
import { Profile } from "../../utils/interfaces/Profile";
import {ProfileAllergy} from "../../utils/interfaces/ProfileAllergy";
import {Status} from "../../utils/interfaces/Status";
import { insertProfileAllergy } from "../../utils/profile-allergy/insert-profile-allery";
import {selectProfileAllergyByPrimaryKey} from "../../utils/profile-allergy/selectProfileAllergyByPrimaryKey"
import {
    selectProfileAllergyByProfileAllergyProfileId
} from "../../utils/profile-allergy/selectProfileAlleryByProfileAllergyProfileId";
import {
    selectProfileAllergyByProfileAllergyAllergyId
} from "../../utils/profile-allergy/selectProfileAllergyByProfileAllergyAllergyId";
import {insertAllergy} from "../../utils/allergy/insertAllergy";
import {deleteProfileAllergy} from "../../utils/profile-allergy/deleteProfileAllergy";

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
        const mySqlResult = await selectProfileAllergyByPrimaryKey(profileAllergyAllergyId, profileAllergyProfileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))
    }
}

//delete ProfileAllergy
export async function deleteProfileAllergyController(request: Request, response: Response) : Promise<Response> {
    try {
        const {profileAllergyAllergyId} = request.params;
        const profile = request.session.profile as Profile
        const profileAllergyProfileId = profile.profileId as string

        const profileAllergy: ProfileAllergy ={profileAllergyAllergyId,profileAllergyProfileId}
        const mySqlResult = await selectProfileAllergyByPrimaryKey(profileAllergyAllergyId, profileAllergyProfileId)
        if (mySqlResult === null){
            return response.json({status:404,message:'profileAllergy does not exists',data:null})
        }
        const result = await deleteProfileAllergy(profileAllergy)
        const status: Status = {status: 200, message: result, data:null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))

    }
}

//getProfileAllergyByProfileId
export async function getProfileAllergyByProfileId(request: Request, response: Response) : Promise<Response> {
    try {

        const profile = request.session.profile as Profile
        const profileAllergyProfileId = profile.profileId as string
        const mySqlResult = await selectProfileAllergyByProfileAllergyProfileId(profileAllergyProfileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))
    }
}

//getProfileAllergyByAllergyId
export async function getProfileAllergyByAllergyId(request: Request, response: Response) : Promise<Response> {
    try {

        const {profileAllergyAllergyId} = request.params;
        const mySqlResult = await selectProfileAllergyByProfileAllergyAllergyId(profileAllergyAllergyId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))
    }
}

