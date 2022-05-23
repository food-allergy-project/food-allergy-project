import {Router} from 'express'
import { getAllergyByAllergyIdController, postAllergyController } from './allergy.controller'
import { allergyValidator } from './allergy.validator'
import { check, checkSchema } from 'express-validator'
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";

export const allergyRoute = Router()
// post allergy

allergyRoute.route("/").post(
    asyncValidatorController(checkSchema(allergyValidator)),
    postAllergyController
)
// get allergy by ID (primary key)

allergyRoute.route("/:allergyId").get(
    asyncValidatorController([check("allergyId","please provide a valid uuid").isUUID()]),
    getAllergyByAllergyIdController
)

// get allergy by foreign key

// get all allergies

// delete allergy

// put allergy (edit)
