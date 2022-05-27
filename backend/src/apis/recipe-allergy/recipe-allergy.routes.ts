import {Router} from "express";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {recipeAllergyValidator} from "./recipe-allergy.validator";
import {postRecipeAllergyController} from "./recipe-allergy.controller";



export const RecipeAllergyRoutes: Router = Router()

// POST
RecipeAllergyRoutes.route("/").post (
    asyncValidatorController(checkSchema(recipeAllergyValidator)),
    postRecipeAllergyController
)