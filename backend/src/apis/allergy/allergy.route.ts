import {Router} from 'express'
import {
    getAllAllergyControllers,
    getAllergiesByProfileId,
    getAllergyByAllergyIdController,
    postAllergyController
} from './allergy.controller'
import { allergyValidator } from './allergy.validator'
import { check, checkSchema } from 'express-validator'
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

export const allergyRoute = Router()
// post allergy

allergyRoute.route("/").post(
    asyncValidatorController(checkSchema(allergyValidator)),
    postAllergyController

)
// get all allergies
allergyRoute.route("/").get(
        getAllAllergyControllers)
// get allergy by ID (primary key)

allergyRoute.route("/:allergyId").get(
    asyncValidatorController([check("allergyId","please provide a valid uuid").isUUID()]),
    getAllergyByAllergyIdController
)

// GET allergy by profileId
allergyRoute.route("/profile")
    .get(isLoggedIn, getAllergiesByProfileId)


