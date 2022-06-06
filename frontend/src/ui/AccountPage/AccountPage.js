import React from "react"
import {UserProfileSection} from "./UserProfileSection";
import {MyRecipes} from "./MyRecipes";

export const AccountPage = () => {
    return (
        <>
            <UserProfileSection />
            <MyRecipes />
        </>
    )
}