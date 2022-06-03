import React from "react"
import {NavBar} from "./shared/components/NavBar";
import {AboutPageBanner} from "./LandingPage/AboutPageBanner";
import {TakeQuizButtonAndImg} from "./LandingPage/TakeQuizButtonAndImg";

export const Home = () => {
    return (
        <>
            <AboutPageBanner />
            <TakeQuizButtonAndImg />
        </>
    )
}