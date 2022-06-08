import React from "react"

import {QuizPage} from "./QuizPage/QuizPage";
import {QuizButtons} from "./QuizPage/QuizButtons";
import {QuizButtonCards} from "./QuizPage/QuizButtonCards";


export const Quiz = () => {
    return (
        <>

            <QuizPage />
            <QuizButtons />
            <QuizButtonCards/>

        </>
    )
}