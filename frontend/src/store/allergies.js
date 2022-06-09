import { createSlice } from "@reduxjs/toolkit";
import {httpConfig} from "../utils/httpConfig";


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

export const fetchAllAllergies = () => async (dispatch) => {
    const {data} =  await httpConfig.get("/apis/allergy/");
    dispatch(getAllAllergies(data));
};

export default slice.reducer