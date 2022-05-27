import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {profileAllergyValidator} from "./profile.allergy.validator";
import {
    getProfileAllergyByPrimaryKey,
    getprofileAllergyProfileId,
    postProfileAllergyController,
    deleteProfileAllergy
} from "./profile.allergy.controller";

export const ProfileAllergyRoute: Router = Router()

//post ProfileAllergy
ProfileAllergyRoute.route("/").post(
    asyncValidatorController(checkSchema(profileAllergyValidator)),
    postProfileAllergyController

)

//get ProfileAllergy by ProfileAllergyAllergyId
ProfileAllergyRoute.route("/:profileAllergyAllergyId")
    .get(
        asyncValidatorController([
            check("profileAllergyAllergyId", "please provide a valid profileAllergyAllergyId").isUUID()
        ])
        , getProfileAllergyByPrimaryKey
    )

    //delete ProfileAllergy
    .delete(isLoggedIn, asyncValidatorController(checkSchema (profileAllergyValidator)), deleteProfileAllergy)


//get ProfileAllergy by ProfileAllergyProfileId
ProfileAllergyRoute.route('/:profileAllergyProfileId')
    .get( isLoggedIn,
        getprofileAllergyProfileId
    )
