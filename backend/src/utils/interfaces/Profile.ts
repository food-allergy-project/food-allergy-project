export interface Profile {
    profileId : string|null,
    profileActivationToken : string|null,
    profileFullName: string,
    profileEmail: string,
    profileHash: string,

}

export interface PartialProfile {
    profileId : string|null,
    profileFullName: string,
    profileEmail: string,
    profileHash: string,
}