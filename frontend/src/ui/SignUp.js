import React from "react";
import {Button, Container} from "react-bootstrap";
import './App.css'

export function SignUp () {
    return (
        <>
            <Container className='text-center border border-dark border-2 rounded p-3 col-md-6 pt-3 my-5 bg-success bg-opacity-10 bg-gradient'>
                <div className='pt-5'>
                    <h1 className='headerSize'>Let's Get Start!</h1>
                </div>
                <div className='p-5'>
                    <h1>Create Account</h1>
                </div>
                <div>
                    <form className='mx-auto col-form-label-lg centerBlockParent'>
                        <div className='form-floating mb-1 col-md-8'>
                            <input type='text' className='form-control border border-dark border-2' placeholder='name' name='name'/>
                            <label className='form-label'>Name: </label>
                        </div>
                        <div className='form-floating mb-1 col-md-8'>
                            <input type='email' className='form-control border border-dark border-2' placeholder='email' name='email'/>
                            <label className='form-label'>Email: </label>
                        </div>
                        <div className='form-floating mb-1 col-md-8'>
                            <input type='text' className='form-control border border-dark border-2' placeholder='password' name='password'/>
                            <label className='form-label'>Password: </label>
                        </div>

                    </form>
                </div>

                <div className='text-center py-5'>
                    <Button variant="success" className='buttonBlockSize2'>Sign Up</Button>
                </div>
                <div className='my-1 pb-5'>
                    <a href="/sign-in" className="link-dark">Already a user? LOGIN</a>
                </div>
            </Container>

            <div className="p-5"></div>
        </>
    )
}