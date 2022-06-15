import React, {useEffect} from "react";
import '../App.css';
import {QuizButtons} from "./QuizButtons";
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import {QuizButtonCards} from "./QuizButtonCards";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllAllergies} from "../../store/allergies";
import {httpConfig} from "../../utils/httpConfig";
import {fetchAuth} from "../../store/auth";
import {FieldArray, Formik} from "formik";
import {FormDebugger} from "../shared/components/FormDebugger";




export function QuizPage (){
    const initialValues = {
        allergies: []
    }
    const allergyProfileId = useSelector(state => state.auth?.profileId ? state.auth.profileId: null)
    function onSubmit(values,{setStatus, resetForm}){
        httpConfig.post('/apis/profile-allergy/',{...values, allergyProfileId}).then(reply=>{
            console.log(values)
            let {message, type} = reply;
            setStatus({message, type});
            if(reply.status === 200 ) {
                resetForm();
                window.location = '/favorites'

            }
            setStatus({message, type});
        })
    }
    const allergies = useSelector(state => state.allergies ? state.allergies : []);
    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchAllAllergies());
        dispatch(fetchAuth())
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
                        <Formik
                            initialValues={initialValues}
                            onSubmit={onSubmit}
                        >
                            {QuizPageFormContent}
                        </Formik>

                    </Container>
                </div>
            </>


        </>
    )
    function QuizPageFormContent (props){
        const {
            setFieldValue,
            status,
            values,
            errors,
            touched,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
        } = props;
        return(
            <>

                <Form onSubmit={handleSubmit}>
                <Row ClassName='mt-5 py-5 justify-content-center'>
                    <FieldArray name={"allergies"}>
                        {({insert, unshift, remove})=>(<>
                            {allergies.map((allergy, index) =>
                                <QuizButtonCards allergy={allergy} index={index} insert={insert} remove={remove} key={allergy.allergyId} values={values} unshift={unshift}/>

                            )}
                        </>)}
                    </FieldArray>
                </Row>
                <div className='text-center'>
                    <Button type="submit" variant="success" className='buttonSize'>Submit Quiz</Button>
                </div>
                </Form>
                <FormDebugger {...props}/>
            </>
        )
    }
}
