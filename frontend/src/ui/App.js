import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'

import {SignIn} from "./SignIn";


import {RecipePage} from './RecipePage'
import {NavBar} from './shared/components/NavBar'
import "./App.css"
 
export const App = () => (
    <>
        <BrowserRouter>
          <NavBar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<FourOhFour/>} />
                <Route path='/recipes' element={<RecipePage />} />
                <Route path='/sign-in' element={<SignIn />} />


            </Routes>
        </BrowserRouter>

    </>
)