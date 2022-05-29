import {Router} from "express";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {recipeAllergyValidator} from "./recipe-allergy.validator";
import {getRecipeAllergyByPrimaryKey, postRecipeAllergyController} from "./recipe-allergy.controller";



export const RecipeAllergyRoutes: Router = Router()

// POST
RecipeAllergyRoutes.route("/").post (
    asyncValidatorController(checkSchema(recipeAllergyValidator)),
    postRecipeAllergyController
)

// GET By Primary

RecipeAllergyRoutes.route("/:recipeAllergyRecipeId")

    //GET
    .get(
        isLoggedIn,
        asyncValidatorController([
            check("recipeAllergyRecipeId", "Please provide a valid recipeAllergyRecipeId").isUUID()
        ])
        , getRecipeAllergyByPrimaryKey
    )