import React, {useEffect} from "react";
import '../App.css';
import {QuizButtons} from "./QuizButtons";
import {Button, Card, Container, Row} from "react-bootstrap";
import {QuizButtonCards} from "./QuizButtonCards";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllAllergies} from "../../store/allergies";


export function QuizPage (){
    const allergies = useSelector(state => state.allergies ? state.allergies : []);
    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchAllAllergies());
    };
    const inputs = [];
    useEffect(effects, inputs);
console.log(allergies)
    return(
        <>
                <div className='container'>
                    <div className='row g-5 text-center'>
                        <h1>Before finding recipes based on your food allergies, take this short quiz!</h1>
                        <h2><i>Which foods are you allergic to?</i></h2>
                    </div>
                </div>
            <>

                <div>
                    <Container>

                        <Row ClassName='mt-5 py-5 justify-content-center'>
                            {allergies.map(allergy => <QuizButtonCards allergy={allergy} key={allergy.allergyId}/>)}
                        </Row>
                        <div className='text-center'>
                            <Button variant="success" className='buttonSize'>Submit Quiz</Button>
                        </div>
                    </Container>
                </div>
            </>


        </>
    )
}