// import { createSlice } from "@reduxjs/toolkit";
// import {httpConfig} from "../utils/httpConfig";
//
//
// const slice = createSlice({
//     name: "profileAllergies",
//     initialState: [],
//     reducers: {
//         setAllergiesByProfileId: (profileAllergies, action) => {
//             return action.payload
//         }
//     }
// })
//
// export const {setAllergiesByProfileId} = slice.actions
// export default slice.reducer
// export const fetchAllergiesByProfileId = () => async (dispatch,getState) => {
//     const auth = getState().auth
//     if(auth){
//         const {data} =  await httpConfig.get(`/apis/profileallergy/profileAllergyProfileId/:profileAllergyProfileId`);
//         dispatch(setAllergiesByProfileId(data));
//     }
// };

