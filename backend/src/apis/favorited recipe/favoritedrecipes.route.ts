import { Router } from 'express'
import { isLoggedIn } from '../../utils/controllers/isLoggedIn.controller'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { check } from 'express-validator'
import {getfavoritedRecipeByPrimaryKey, togglefavoritedRecipeController} from "./favoritedrecipe.controller";

export const favoritedreciperoute = Router()

favoritedreciperoute.route('/')
    .post(isLoggedIn, togglefavoritedRecipeController)
favoritedreciperoute.route('/:favoritedRecipeRecipeId')
    .get(isLoggedIn, asyncValidatorController([
        check('favoritedRecipeRecipeId', 'please provide a valid favoritedRecipeRecipeId').isUUID()
    ]), getfavoritedRecipeByPrimaryKey )
