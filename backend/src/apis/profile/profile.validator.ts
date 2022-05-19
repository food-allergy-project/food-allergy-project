import {Schema} from "express-validator";

export const profileValidator : Schema = {
    profileId: {
        isUUID: {
            errorMessage: 'please provide a valid TweetProfileId'
        }
    },

    profileEmail: {
        isEmail: {
            errorMessage: 'Please provide a valid email'
        },
        trim: true
    },

};