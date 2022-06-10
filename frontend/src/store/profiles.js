import {createSelector, createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig";


const slice = createSlice({
    name: 'profiles',
    initialState: {},
    reducers: {
        setInitialProfiles: (profiles, action) => {
            return action.payload
        },
        setProfileByProfileId: (profiles, action) => {
            profiles[action.payload.id] = action.payload.data
        }
    }
})

export const { setInitialProfiles, setProfileByProfileId } = slice.actions


export const fetchAllProfiles = () => async dispatch => {

    const { data } = await httpConfig(`/apis/profiles/`)

    if (Array.isArray(data) === false) {
        throw new Error('Data is malformed')
    }

    const userDictionary = data.reduce((accumulator, currentValue) => {
            accumulator[currentValue.profileId] = currentValue
            return accumulator
        },
        {}
    )
    dispatch(setInitialProfiles(userDictionary))
}

export const fetchProfileByProfileId = (id) => async (dispatch, getState) => {

    const profiles = getState().profile
    // console.log(profiles[id])
    if (profiles[id] === undefined) {
        // console.log(profiles[id])
        const { data } = await httpConfig(`/apis/profile/${id}`)
        dispatch(setProfileByProfileId({ id, data }))
    }
}

export const selectProfileByProfileId = (id) =>
    createSelector(
        state => state?.profile[id]
            ? state?.profile[id]
            : null
    )

export default slice.reducer