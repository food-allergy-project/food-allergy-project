import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {RecipePage} from './RecipePage'
import {NavBar} from '../ui/shared/components/NavBar'
import "./App.css"
 
export const App = () => (
    <>
        <BrowserRouter>
          <NavBar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<FourOhFour/>} />
                <Route path='/recipes'element={<RecipePage />} />

            </Routes>
        </BrowserRouter>

    </>
)