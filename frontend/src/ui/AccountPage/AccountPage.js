import React, {useEffect} from "react"
import {UserProfileSection} from "./UserProfileSection";

import {MyRecipes} from "./MyRecipes";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth} from "../../store/auth";
import {fetchFavoritedRecipesByProfileId} from "../../store/favoritedRecipes";


// import {MyRecentFavorites} from "./MyRecentFavorites";


export const AccountPage = () => {
    const auth = useSelector(state => state.auth);
    console.log(auth)
    const dispatch = useDispatch()
    const effects = () => {
        dispatch(fetchFavoritedRecipesByProfileId());
        dispatch(fetchAuth());
    };
    const inputs = [];
    useEffect(effects, inputs);

    React.useEffect(effects, [dispatch])
    const myFavoritedRecipes = useSelector((state) => state.favoritedRecipes ? state.favoritedRecipes : [])

    return (
        <>
            <UserProfileSection profile={auth}/>
            <div className='pb-5'>
                <MyRecipes />
            </div>
            {/*<div className='pb-5'></div>*/}
            {/*<div className='my-5'>*/}
            {/*    <MyRecentFavorites />*/}
            {/*</div>*/}

        </>
    )
}