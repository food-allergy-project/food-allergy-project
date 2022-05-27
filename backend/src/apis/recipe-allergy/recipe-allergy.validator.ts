import {Schema} from "express-validator";

export const recipeAllergyValidator : Schema = {
    recipeAllergyRecipeId: {
        isUUID: {
            errorMessage: 'please provide a valid RecipeAllergyRecipeId'
        }
    },

    recipeAllergyProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid ProfileAllergyProfileId'
        }

    }
}