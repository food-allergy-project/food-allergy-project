import {httpConfig} from "../utils/httpConfig";
import {createSlice} from "@reduxjs/toolkit";


const slice = createSlice({
    name: "allergies",
    initialState: [],
    reducers: {
        getAllAllergies: (allergies, action) => {
            return action.payload
        }
    }
})

export const {getAllAllergies} = slice.actions

export const fetchAllergiesByProfileId = () => async (dispatch,getState) => {
    const auth = getState().auth
    if(auth){
        const {data} =  await httpConfig.get(`/apis/profile-allergy/profileAllergyProfileId/${auth.profileId}`);
        let allergies = []
        for ( let profileAllergy of data){
            const allergy = await httpConfig.get(`/apis/allergy/${profileAllergy.profileAllergyAllergyId}`)
            allergies.push(allergy.data)
        }
        dispatch(getAllAllergies(allergies));
    }
};

export default slice.reducer
