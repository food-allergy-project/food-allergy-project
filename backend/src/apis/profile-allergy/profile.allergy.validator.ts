import {Schema} from "express-validator";

export const profileAllergyValidator : Schema = {
    profileAllergyAllergyId: {
        isUUID: {
            errorMessage: 'please provide a valid ProfileAllergyAllergyId'
        }
    },

    profileAllergyProfileId: {
        isUUID: {
            errorMessage: 'Please provide a valid ProfileAllergyProfileId'
        },
        trim: true
    },

};