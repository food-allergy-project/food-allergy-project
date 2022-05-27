import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {profileAllergyValidator} from "./profile.allergy.validator";
import {
    getProfileAllergyByPrimaryKey,
    postProfileAllergyController,
    getProfileAllergyByProfileId, getProfileAllergyByAllergyId, deleteProfileAllergyController
} from "./profile.allergy.controller";

export const ProfileAllergyRoute: Router = Router()

//post ProfileAllergy
ProfileAllergyRoute.route("/").post(
    asyncValidatorController(checkSchema(profileAllergyValidator)),
    postProfileAllergyController

)

//get ProfileAllergy by Primary Key (AllergyId)
ProfileAllergyRoute.route("/:profileAllergyAllergyId")

    //delete ProfileAllergy by Primary Key
    .delete(isLoggedIn,
        asyncValidatorController([
        check("profileAllergyAllergyId", "please provide a valid profileAllergyAllergyId").isUUID()
    ]) , deleteProfileAllergyController)

    //get ProfileAllergy by Primary Key
    .get(
        isLoggedIn,
        asyncValidatorController([
            check("profileAllergyAllergyId", "please provide a valid profileAllergyAllergyId").isUUID()
        ])
        , getProfileAllergyByPrimaryKey
    )

//get ProfileAllergies by ProfileId
ProfileAllergyRoute.route("/profileAllergyProfileId/:profileAllergyProfileId")
    .get( isLoggedIn,
        asyncValidatorController([
        check("profileAllergyProfileId", "please provide a valid profileAllergyProfileId").isUUID()
    ]), getProfileAllergyByProfileId)

//get ProfileAllergies by AllergyId
ProfileAllergyRoute.route("/profileAllergyAllergyId/:profileAllergyAllergyId")
    .get( isLoggedIn,
        asyncValidatorController([
            check("profileAllergyAllergyId", "please provide a valid profileAllergyAllergyId").isUUID()
        ]), getProfileAllergyByAllergyId)

