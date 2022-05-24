import {Schema} from "express-validator";

export const profileAllergyValidator : Schema = {
    profileAlleryAllergyId: {
        isUUID: {
            errorMessage: 'please provide a valid ProfileAllergyAllergyId'
        }
    },

    profileAllergyProfileId: {
        isEmail: {
            errorMessage: 'Please provide a valid ProfileAllergyProfileId'
        },
        trim: true
    },

};