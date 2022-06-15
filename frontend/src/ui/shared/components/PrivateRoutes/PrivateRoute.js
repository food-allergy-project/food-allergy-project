// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'
import { fetchAuth } from '../../../../store/auth'
import { useJwtToken } from '../../useJwtToken'
import { IsLoading } from './IsLoading'
import { HandleRedirect } from './HandleRedirect'
/**
 * A higher order component that checks if a user is signed in (auth is set in redux with a valid JWT). If the user is signed they get redirected to the protected route, else the user is redirected to the login page.
 * @param {Component} childComponent child component called in the body of Private route
 * @param {object} rest props provided by React Router. Make sure to set the path prop.
 * @returns {JSX.Element} Either the protected component or a react router redirect depending if the user is logged in.
 * @constructor
 */
export function PrivateRoute ({children}){

    const {authenticatedUser, isLoading} = useJwtToken()
console.log(authenticatedUser)

    if(isLoading === true) {
        return <IsLoading />

    } else if(  authenticatedUser === null) {
        return <HandleRedirect />
    }

    return children
}