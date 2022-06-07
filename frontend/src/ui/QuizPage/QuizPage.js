import React from "react";
import '../App.css';
import {QuizButtons} from "./QuizButtons";

export function QuizPage (){
    return(
        <>
                <div className='container'>
                    <div className='row g-5 text-center'>
                        <h1>Before finding recipes based on your food allergies, take this short quiz!</h1>
                        <h2><i>Which foods are you allergic to?</i></h2>
                    </div>
                </div>
                <QuizButtons/>


        </>
    )
}