import {Schema} from 'express-validator'

export const allergyValidator: Schema = {
    allergyId: {
        isUUID: {
            errorMessage: 'please provide a valid allergyProfileId'
        }

    },
    allergyImage: {
        optional: {
            options: {
                nullable: true
            }
        },
        isURL: {
            errorMessage: 'please upload a new image'
        }
    },
    allergyImageAlt: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'Image Alt must be between 1-10 characters',
            options: {min: 1, max: 10}
        }
    },
    allergyName: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'allergy name must be between 1-10 characters',
            options: {min: 1, max: 10}
        }

    }
}