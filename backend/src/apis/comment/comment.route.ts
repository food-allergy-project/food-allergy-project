import { Router } from 'express'
import {getAllCommentsController, getCommentByCommentIdController,getCommentsByCommentProfileIdController,getCommentsByCommentRecipeIdController, postComment} from './comment.controller'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import {check, checkSchema} from 'express-validator'
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {commentValidator} from "./comment.validator";

export const CommentRoute: Router = Router()

//getCommentByCommentId (working)
CommentRoute.route('/:commentId')
    .get( //isLoggedIn(?),
        asyncValidatorController([
    check('commentId', 'please provide a valid commentId').isUUID()
]), getCommentByCommentIdController)

//getCommentsByCommentProfileId (working)
CommentRoute.route('/commentProfileId/:commentProfileId')
    .get( isLoggedIn,
        asyncValidatorController([
            check('commentProfileId', 'please provide a valid commentProfileId').isUUID()
]), getCommentsByCommentProfileIdController)

//getCommentsByCommentRecipeId (working)
CommentRoute.route('/commentRecipeId/:commentRecipeId')
    .get(isLoggedIn,
        asyncValidatorController([
            check('commentRecipeId', 'please provide a valid commentRecipeId').isUUID()
]), getCommentsByCommentRecipeIdController)

//getAllComments (working)
CommentRoute.route('/')
    .get( //isLoggedIn (?)
        getAllCommentsController
    )

    //post a comment (working)
    .post( isLoggedIn,
        asyncValidatorController(checkSchema(commentValidator)),
        postComment
    )

