import React from 'react'
import {useDispatch} from 'react-redux'
import {Button, Container} from "react-bootstrap";
import {httpConfig} from "../../utils/httpConfig";
import {getAuth} from "../../store/auth";

export const SignOut = () => {
    const dispatch = useDispatch()
    const signOut = () => {
        httpConfig.get('/apis/sign-out/').then(reply => {
            if (reply.status === 200) {
                window.location = '/'
                window.localStorage.removeItem('authorization')
                dispatch(getAuth(null))
            }
        })
    }

    return (
        <>
            <Container>
                <div>
                <h5 className="text-center">See you again soon!</h5>
                </div>
            <div className="text-center align-content-center justify-content-center my-5 py-5">
                <Button variant={"success"} onClick={signOut}>
                    Sign Out
                </Button>
            </div>
                <div className="pt-3">

                </div>
            </Container>
        </>
    )
}