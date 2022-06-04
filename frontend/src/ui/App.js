import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import { FavoritePage} from './FavoritePage'
import React from 'react'
import {RecipePage} from './RecipePage'
import {NavBar} from './shared/components/NavBar'
import "./App.css"
import {SignIn} from "./SignIn";

export const App = () => (
    <>
        <BrowserRouter>
          <NavBar/>
          <Routes>
                <Route exact path='/favorite' element={<FavoritePage/>} />
                <Route exact path='/' element={<Home />} />
                <Route path='*' element={<FourOhFour/>} />
                <Route path='/recipes' element={<RecipePage />} />
                <Route path='/sign-in' element={<SignIn />} />

            </Routes>
        </BrowserRouter>

    </>
)