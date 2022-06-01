import { Schema } from 'express-validator'

export const commentValidator: Schema = {
    commentProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid commentProfileId'
        }
    },
    commentRecipeId: {
        isUUID: {
            errorMessage: 'please provide a valid commentRecipeId'
        }

    },
    commentContent: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'comment must be between 1-255 characters',
            options: {min: 1, max: 255}
        }
},
    tweetDate: {
        toDate: true
    }
}