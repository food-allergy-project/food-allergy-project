import React from 'react'
import {useDispatch} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {httpConfig} from "../../../utils/httpConfig";
import {getAuth} from "../../../store/auth";

export const SignOutComponent = () => {
    const dispatch = useDispatch()
    const signOut = () => {
        httpConfig.get('/apis/sign-out/').then(reply => {

            if (reply.status === 200) {
                window.localStorage.removeItem('authorization')
                dispatch(getAuth(null))
                window.location = '/sign-in'

            }
        })
    }

    return(
        <>
            <div>
                <button className="btn btn" onClick={signOut}>
                    Sign Out&nbsp;&nbsp;<FontAwesomeIcon icon="sign-out-alt" />
                </button>
            </div>
        </>
    )
}