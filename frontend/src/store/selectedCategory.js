import {createSlice} from '@reduxjs/toolkit'


// Define our reducer and action
const slice = createSlice({
    name: 'selectedCategories',
    initialState: [],
    reducers: {
        setSelectedCategories: (selectedCategories, action) => action.payload
    }
})

// Make our actions callable as function setAllMisquotes
export const {setSelectedCategories} = slice.actions

export default slice.reducer

// create an export to allow async calls to our action
export const fetchFavoritedRecipesByProfileId = (data) => async dispatch => {
    dispatch(setSelectedCategories(data))
}