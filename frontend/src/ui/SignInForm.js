import React from "react";
import {Button, Container} from "react-bootstrap";
import './App.css'
import {useDispatch} from "react-redux";
import * as Yup from "yup";
import {httpConfig} from "../utils/httpConfig";
import jwtDecode from "jwt-decode";
import {getAuth} from "../store/auth";
import {Formik} from "formik";

export const SignInForm = () => {
    const dispatch = useDispatch()

    const validator = Yup.object().shape({
        profileEmail: Yup.string()
            .email("please provide a valid email")
            .required('email is required'),
        profilePassword: Yup.string()
            .required("password is required")
            .min(8, "password must be at least eight characters")
    });


    //the initial values object defines what the request payload is.
    const signIn = {
        profileEmail: "",
        profilePassword: ""
    };

    const submitSignIn = (values, {resetForm, setStatus}) => {
        httpConfig.post("/apis/sign-in/", values)
            .then(reply => {
                let {message, type} = reply;
                setStatus({message, type});
                if(reply.status === 200 && reply.headers["authorization"]) {
                    window.localStorage.removeItem("authorization");
                    window.localStorage.setItem("authorization", reply.headers["authorization"]);
                    resetForm();

                    let jwtToken = jwtDecode(reply.headers["authorization"])
                    dispatch(getAuth(jwtToken))

                    window.location = '/quiz';
                }
                setStatus({message, type});
            });
    };

    return (
        <>
            <Formik
                initialValues={signIn}
                onSubmit={submitSignIn}
                validationSchema={validator}
            >
                {SignInFormContent}
            </Formik>
        </>
    )
};

function SignInFormContent (props) {
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
            <Container className='text-center border  border-dark border-2 rounded p-3 col-md-6 pt-3 my-5 ourBackground bg-gradient'>
                <div className='pt-5'>
                    <h1 className='headerSize'>Welcome Back!</h1>
                </div>
                <div className='p-5'>

                    <h1>Login</h1>
                </div>

                <div>

                    <form onSubmit={handleSubmit} className='mx-auto col-form-label-lg centerBlockParent'>

                        <div className='form-floating mb-1 col-md-8'>
                                <input
                                    value={values.profileEmail}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type='email'
                                    className='form-control border border-dark border-2'
                                    placeholder='email'
                                    name='profileEmail'/>
                                <label htmlFor='profileEmail' className='form-label'>Email: </label>
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
                                    type='password'
                                    value={values.profilePassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className='form-control border border-dark border-2'
                                    placeholder='password'
                                    name='profilePassword'/>
                                <label htmlFor='profilePassword' className='form-label'>Password: </label>
                        </div>
                        {
                            errors.profilePassword && touched.profilePassword && (
                                <div className="alert alert-danger">
                                    {errors.profilePassword}
                                </div>
                            )
                        }

                    </form>
                </div>

                <div className='text-center py-5'>
                    <Button
                        variant="success"
                        onClick={handleSubmit}
                        className='btn buttonBlockSize2'>Sign In</Button>
                </div>
                <div className='my-1 pb-5'>
                    <a href="/sign-up" className="link-dark">Create Account</a>
                </div>
            </Container>


        </>
    )
}