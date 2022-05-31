import {Router} from "express";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {recipeAllergyValidator} from "./recipe-allergy.validator";
import {
    deleteRecipeAllergyController,
    getRecipeAllergyByPrimaryKey, getRecipeAllergyProfileId, getRecipeAllergyRecipeId,
    postRecipeAllergyController
} from "./recipe-allergy.controller";



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
    // Delete
    .delete(isLoggedIn,
        asyncValidatorController([
            check("recipeAllergyRecipeId", "please provide a valid recipeAllergyRecipeId").isUUID()
        ]) , deleteRecipeAllergyController)

// GET recipeAllergy by RecipeId
RecipeAllergyRoutes.route("/recipeAllergyRecipeId/:recipeAllergyRecipeId")
    .get( isLoggedIn,
        asyncValidatorController([
            check("recipeAllergyRecipeId", "please provide a valid recipeAllergyRecipeId").isUUID()
        ]), getRecipeAllergyRecipeId)

// GET recipeAllergy by ProfileId
RecipeAllergyRoutes.route("/recipeAllergyProfileId/:recipeAllergyProfileId")
    .get( isLoggedIn,
        asyncValidatorController([
            check("recipeAllergyProfileId", "please provide a valid recipeAllergyProfileId").isUUID()
        ]), getRecipeAllergyProfileId)