import {Request, Response} from 'express'
import { insertAllergy } from '../../../utils/allergy/insertAllergy'
import { selectAllergyByAllergyId } from '../../../utils/tag/selectAllergyByAllergyId'
import {Allergy} from "../../utils/interfaces/Allergy";

export async function postAllergyController(request: Request, response: Response) : Promise<Response> {
    try {
        // const tagName = request.body.tagName
        const {allergyName} = request.body
        const allergy : Allergy = {allergyId:null, allergyName}
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