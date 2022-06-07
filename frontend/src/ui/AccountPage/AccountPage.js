import React from "react"
import {UserProfileSection} from "./UserProfileSection";

import {MyRecipes} from "./MyRecipes";
// import {MyRecentFavorites} from "./MyRecentFavorites";


export const AccountPage = () => {
    return (
        <>
            <UserProfileSection />
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