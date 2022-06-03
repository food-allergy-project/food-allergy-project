import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {SignIn} from "./SignIn";
import {NavBar} from "./shared/components/NavBar";
import {SignUp} from "./SignUp";

export const App = () => (
    <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route  path='/sign-up' element={<SignUp />} />
                <Route  path='/sign-in' element={<SignIn />} />
                <Route path='*' element={<FourOhFour />} />
            </Routes>
        </BrowserRouter>

    </>
)