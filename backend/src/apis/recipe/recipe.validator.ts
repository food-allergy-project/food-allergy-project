import {Schema} from 'express-validator'

export const recipeValidator: Schema = {
    recipeProfileId: {
        isUUID: {
            errorMessage: 'please provide a valid RecipeProfileId'
        }

    },
    recipeImage: {
        optional: {
            options: {
                nullable: true
            }
        },
        isURL: {
            errorMessage: 'please upload a new image'
        }
    },
    recipeImageAlt: {
        optional: {
            options: {
                nullable: true
            }
        },
        escape: true,
        trim: true,

        isLength: {
            errorMessage: 'Image Alt must be between 1-20 characters',
            options: {min: 1, max: 20}
            
        }
    },
    recipeTitle: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage: 'recipe name must be between 1-20 characters',
            options: {min: 1, max: 20}
        }
    },
    recipeInstructions: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage:'Recipe Instructions must be between 1-5000 characters',
            options: {min:1, max:5000}
        }
    },
    recipeIngredients: {
        escape: true,
        trim: true,
        isLength: {
            errorMessage:'Ingredients list must be between 1-300 characters',
            options: {min:1, max:300}
        }
    },
    recipeDate: {
        toDate: true
    },

    recipeCategory: {

        custom: {
            options:(value : string) => {
                const options: Array<string> = ["breakfast", "lunch", "dinner", "snack", "dessert"]
                console.log(value)
                if (options.includes(value))  { return true
                    
                } else {throw new Error("Category must be breakfast, lunch, dinner, snack, or dessert")}
                
            }
        },
        escape: true,
        trim: true,
        }
}