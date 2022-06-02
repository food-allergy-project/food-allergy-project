import React from "react"
import {NavBar} from "./shared/components/NavBar";
import {AboutPageBanner} from "./LandingPage/AboutPageBanner";

export const Home = () => {
    return (
        <>
            <NavBar />
            <AboutPageBanner />
        </>
    )
}