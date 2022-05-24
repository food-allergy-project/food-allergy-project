import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {profileAllergyValidator} from "./profile.allergy.validator";
import { getProfileAllergyAllergyId, getprofileAllergyProfileId, deleteProfileAllergyAllergyId, deleteProfileAllergyProfileId} from "./profile.allergy.controller";



export const ProfileAllergyRoute: Router = Router()

ProfileAllergyRoute.route("/:profileAllergyAllergyId")
    .get(
        asyncValidatorController([
            check("profileAllergyAllergyId", "please provide a valid profileAllergyAllergyId").isUUID()
        ])
        , getProfileAllergyAllergyId
    )
    //

    .delete(isLoggedIn, asyncValidatorController(checkSchema (profileAllergyValidator)), deleteProfileAllergyAllergyId)

ProfileAllergyRoute.route('/:profileAllergyProfileId')
    .get(
        asyncValidatorController([
            check("profileAllergyProfileId", "please provide a valid profileAllergyProfileId").isUUID()
        ])
        , getprofileAllergyProfileId
    )
    //

    .delete(isLoggedIn, asyncValidatorController(checkSchema (profileAllergyValidator)), deleteProfileAllergyProfileId)