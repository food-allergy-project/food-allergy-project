import { createSlice } from "@reduxjs/toolkit";
import {httpConfig} from "../utils/httpConfig";



const slice = createSlice({
    name: "allergies",
    initialState: [],
    reducers: {
        setAllAllergies: (allergies, action) => {
            return action.payload
        }
    }
})

export const {setAllAllergies} = slice.actions

export const fetchAllAllergies = () => async (dispatch) => {
    const {data} =  await httpConfig.get("/apis/allergy/");
    dispatch(setAllAllergies(data));
};

export default slice.reducer