import {Schema} from "express-validator";

export const recipeAllergyValidator : Schema = {
    recipeAllergyRecipeId: {
        isUUID: {
            errorMessage: 'please provide a valid RecipeAllergyRecipeId'
        }
    },

    profileAllergyProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid ProfileAllergyProfileId'
        }

    }
}