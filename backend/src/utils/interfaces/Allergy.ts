export interface Allergy {
    allergyId: null|string
    allergyName: null|string
    allergyImage: string
    allergyImageAlt: string
}

export interface PartialAllergy {
    allergyId : string|null,
    allergyName: string,
    allergyImage: string,
    allergyImageAlt: string,
}