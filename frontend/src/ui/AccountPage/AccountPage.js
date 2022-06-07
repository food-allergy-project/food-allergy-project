import React from "react"
import {UserProfileSection} from "./UserProfileSection";

import {MyRecipes} from "./MyRecipes";
import {MyRecentFavorites} from "./MyRecentFavorites";

export const AccountPage = () => {
    return (
        <>
            <UserProfileSection />
            <MyRecipes />
            <MyRecentFavorites />
        </>
    )
}