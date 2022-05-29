export interface Recipe {
    recipeCategory: string,
    recipeProfileId: string|null,
    recipeId : string|null,
    recipeTitle: string,
    recipeImage: string
    recipeImageAlt: string
    recipeInstructions: string
    recipeDate: Date|null,
    recipeIngredients: string
}
