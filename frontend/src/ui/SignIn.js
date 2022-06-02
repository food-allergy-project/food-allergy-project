import React from "react";
import {Button, Container} from "react-bootstrap";
import './App.css'

export function SignIn () {
    return (
        <>
            <Container className='text-center border border-dark border-4 p-3 col-md-6 pt-3'>
                <div>
                    <h1>Welcome Back!</h1>
                </div>
                <div className='p-5'>
                    <h3>Login</h3>
                </div>
                <form>
                    <div className='form-floating mb-1 col-md-8'>
                        <input type='text' className='form-control border border-dark border-2'/>
                        <label className='form-label'>Email: </label>
                    </div>
                    <div className='form-floating mb-1 col-md-8'>
                        <input type='text' className='form-control border border-dark border-2'/>
                        <label className='form-label'>Password: </label>
                    </div>
                </form>
                <div className='text-center p-5'>
                    <Button variant="success" className='buttonBlockSize2'>Sign In</Button>
                </div>
            </Container>
        </>
    )
}