
import {Router} from "express";
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {check, checkSchema} from "express-validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import { recipeValidator } from "./recipe.validator";
import {
    putRecipeController,
    getRecipeByRecipeIdController,
    getAllRecipeControllers,
    postRecipeController,
    getRecipeByFavoriteProfileId, getAllRecipeByRecipeProfileId,
} from "./recipe.controller";



export const RecipeRoute: Router = Router()



RecipeRoute.route("/:recipeId")
    .get(
        asyncValidatorController([
            check("recipeId", "please provide a valid recipeId").isUUID()
        ])
        , getRecipeByRecipeIdController
    )
    //
    .put(isLoggedIn, asyncValidatorController(checkSchema(recipeValidator)),putRecipeController)

RecipeRoute.route("/:recipeProfileId")
    .get(
        asyncValidatorController([
            check("recipeProfileId", "please provide a valid recipeProfileId").isUUID()
        ])
        , getAllRecipeByRecipeProfileId
    )


RecipeRoute.route('/')
    .get(
        getAllRecipeControllers)
    
    .post(isLoggedIn, asyncValidatorController(checkSchema(recipeValidator)),
        postRecipeController)

RecipeRoute.route("/favorites/profile")
    .get(
        isLoggedIn,getRecipeByFavoriteProfileId)