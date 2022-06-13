import {Request, Response} from 'express'
import {Allergy} from "../../utils/interfaces/Allergy";
import {insertAllergy} from "../../utils/allergy/insertAllergy";
import {selectAllergyByAllergyId} from "../../utils/allergy/selectAllergyByAllergyId";
import {Status} from "../../utils/interfaces/Status";
import {selectAllAllergies} from "../../utils/allergy/selectAllAllergies";
import {selectAllergiesByProfileId} from "../../utils/allergy/selectAllergiesByProfileId";

export async function postAllergyController(request: Request, response: Response) : Promise<Response> {
    try {
        const {allergyId} = request.params
        const {allergyImage, allergyImageAlt, allergyName} = request.body
        const allergy : Allergy = {allergyId:null, allergyImage, allergyImageAlt, allergyName}
        const message = await insertAllergy(allergy)
        return response.json({status:200, data: null, message})

    }catch (e) {
        console.error(e)
        return response.json({status:500, data: null, message: 'internal server error please try again.'})
    }
}

export async function getAllergyByAllergyIdController(request: Request, response: Response) : Promise<Response> {
    try {
        const {allergyId} = request.params
        const data = await selectAllergyByAllergyId(allergyId)
        return response.json({status: 200, data, message: null})
    } catch (error) {
        console.error(error)
        return response.json({status:500, data: null, message: 'internal server error please try again.'})
    }
}

export async function getAllAllergyControllers(request: Request, response: Response) : Promise<Response> {
    try {
        const mySqlResult = await selectAllAllergies();
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))
    }
}

// GET allergies by profileId
export async function getAllergiesByProfileId (request: Request, response: Response) : Promise<Response> {
    try {
        const {profileId} = request.params;
        const mySqlResult = await selectAllergiesByProfileId(profileId);
        const data = mySqlResult ?? null
        const status : Status = {status: 200, data, message: null}
        return response.json(status)
    } catch (error: any) {
        return (response.json({status:400, data: null, message: error.message}))
    }
}