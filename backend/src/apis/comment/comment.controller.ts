import { Request, Response, NextFunction } from 'express'
import { Comment } from '../../utils/interfaces/Comment'
import { Status } from '../../utils/interfaces/Status'
import { Profile } from '../../utils/interfaces/Profile'
import { insertComment } from '../../utils/comment/insertComment'
import { selectCommentsByCommentProfileId } from '../../utils/comment/selectCommentsByCommentProfileId'
import { selectCommentByCommentId } from '../../utils/comment/selectCommentByCommentId'
import { selectAllComments } from '../../utils/comment/selectAllComments'
import {selectCommentsByCommentRecipeId} from "../../utils/comment/selectCommentsByCommentRecipeId";
import {deleteComment} from "../../utils/comment/deleteComment";

// get All Comments (working)
export async function getAllCommentsController (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const data = await selectAllComments()
        // return the response
        const status: Status = { status: 200, message: null, data }
        return response.json(status)
    } catch (error) {
        return response.json({status: 500, message: '', data: []})
    }
}

// get Comments by CommentProfileId (working)
export async function getCommentsByCommentProfileIdController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { commentProfileId } = request.params
        const data = await selectCommentsByCommentProfileId(commentProfileId)
        return response.json({ status: 200, message: null, data })
    } catch (error) {
        return response.json({status: 500, message: '', data: []})
    }
}

// get Comments by CommentRecipeId (working)
export async function getCommentsByCommentRecipeIdController (request: Request, response: Response): Promise<Response> {
    try {
        const { commentRecipeId } = request.params
        const mySqlResult = await selectCommentsByCommentRecipeId(commentRecipeId);
        const data = mySqlResult ?? null
        const status:Status = {status:200, data, message:null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))
    }
}

// get Comment by CommentId (working)
export async function getCommentByCommentIdController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
    try {
        const { commentId } = request.params
        const data = await selectCommentByCommentId(commentId)
        return response.json({ status: 200, message: null, data })
    } catch (error) {
        return response.json({status: 500, message: '', data: null})
    }
}

// post Comment (working)
export async function postComment (request: Request, response: Response): Promise<Response<Status>> {
    try {
        const { commentContent } = request.body
        const {commentRecipeId} = request.body
        const profile = request.session.profile as Profile
        const commentProfileId: string = profile.profileId as string
        const comment: Comment = {commentId: null, commentProfileId, commentRecipeId, commentContent, commentDate: null}

        const result = await insertComment(comment)
        const status: Status = {status: 200, message: result, data: null}
        return response.json(status)
    } catch (error) {
        return response.json({status: 500, message: 'Error Creating comment try again later.', data: null})
    }
}

//delete Comment
export async function deleteCommentController(request: Request, response: Response) : Promise<Response> {
    try {
        const {commentId} = request.params;
        //const {commentContent, commentRecipeId} = request.body
        const profile = request.session.profile as Profile
        const commentProfileId = profile.profileId as string

        //const comment: Comment ={commentId: null, commentProfileId, commentRecipeId, commentContent, commentDate: null}
        const mySqlResult = await selectCommentByCommentId(commentId)
        if (mySqlResult === null){
            return response.json({status:404,message:'comment does not exists',data:null})
        }
        if (mySqlResult.commentProfileId !== commentProfileId) {
            return response.json({status:400, message:"You do not have permission to perform this task", data:null})
        }
        const result = await deleteComment(commentId)
        const status: Status = {status: 200, message: result, data:null}
        return response.json(status)

    } catch (error: any) {
        return(response.json({status: 400, data: null, message: error.message}))

    }
}