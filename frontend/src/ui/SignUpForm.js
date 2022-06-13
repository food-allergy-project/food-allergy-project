import React from "react";
import {Button, Container} from "react-bootstrap";
import './App.css'
import * as Yup from "yup";
import {httpConfig} from "../utils/httpConfig";
import {Formik} from "formik";
import {DisplayStatus} from "./shared/components/display-status/DIsplayStatus";




export const SignUpForm = () => {
    const signUp = {
        profileEmail: "",
        profileFullName: "",
        profilePassword: "",
        profilePasswordConfirm: "",

    };



    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("email must be a valid email")
            .required('email is required'),
        profileFullName: Yup.string()
            .required("profile handle is required"),
        profilePassword: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least eight characters"),
        profilePasswordConfirm: Yup.string()
            .required("Password Confirm is required")
            .min(8, "Password must be at least eight characters"),

    });

    const submitSignUp = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-up/", values)
            .then(reply => {
                    let {message, type} = reply;

                    if(reply.status === 200) {
                        resetForm();
                        window.location = '/sign-in';
                    }
                    setStatus({message, type});
                }
            );
    };



    return (

        <Formik
            initialValues={signUp}
            onSubmit={submitSignUp}
            validationSchema={validator}
        >
            {SignUpFormContent}
        </Formik>

    )
};
function  SignUpFormContent(props){
    const {
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
    return (
        <>
            <Container className='text-center border border-dark border-2 rounded p-3 col-md-6 pt-3 my-5 ourBackground bg-gradient'>
                <div className='pt-5'>
                    <h1 className='headerSize'>Let's Get Started!</h1>
                </div>
                <div className='p-5'>
                    <h1>Create Account</h1>
                </div>
                <div>

                    <form onSubmit={handleSubmit} className='mx-auto col-form-label-lg centerBlockParent'>

                        <div className='form-floating mb-1 col-md-8'>
                            <input
                                name="profileFullName"
                                type="text"
                                value={values.profileFullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className='form-control border border-dark border-2'
                                placeholder='Full Name'/>
                            <label
                                htmlFor="profileFullName"
                                className='form-label'>Name: </label>
                        </div>

                        <div className='form-floating mb-1 col-md-8'>
                            <input
                                value={values.profileEmail}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type='email'
                                className='form-control border border-dark border-2'
                                placeholder='email'
                                name='profileEmail'/>
                            <label htmlFor="profileEmail" className='form-label'>Email: </label>
                        </div>
                        {
                            errors.profileEmail && touched.profileEmail && (
                                <div className="alert alert-danger">
                                    {errors.profileEmail}
                                </div>
                            )

                        }

                        <div className='form-floating mb-1 col-md-8'>

                            <input
                                   name="profilePassword"
                                   type="password"
                                   placeholder="Password"
                                   value={values.profilePassword}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   className='form-control border border-dark border-2'/>
                            <label
                                htmlFor="profilePassword"
                                className='form-label'>Password:</label>
                        </div>
                        {errors.profilePassword && touched.profilePassword && (
                            <div className="alert alert-danger">{errors.profilePassword}</div>
                        )}


                        <div className='form-floating mb-1 col-md-8'>

                            <input
                                name="profilePasswordConfirm"
                                type="password"
                                placeholder="Password Confirm"
                                value={values.profilePasswordConfirm}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className='form-control border border-dark border-2'/>
                            <label
                                htmlFor="profilePasswordConfirm"
                                className='form-label'>Re-type Password:</label>
                        </div>
                    </form>
                </div>

                <div className='text-center py-5'>
                    <Button variant="success"
                            onClick={handleSubmit}
                            className='btn buttonBlockSize2'>Sign Up</Button>
                </div>
                {" "}
                <button
                    className="btn btn-danger mb-2"
                    onClick={handleReset}
                    disabled={!dirty || isSubmitting}
                >Reset Form
                </button>
                <div className='my-1 pb-5'>
                    <a href={"/sign-in"} className="link-dark">Already a user? LOGIN</a>
                </div>

            </Container>

            <DisplayStatus status={status} />
        </>
    )
}