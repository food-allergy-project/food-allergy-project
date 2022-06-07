import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import { FavoritePage} from './FavoritePage'
import {RecipePage} from './RecipePage'
import React from 'react'
import {SignIn} from "./SignIn";
import { Provider } from 'react-redux'
import {NavBar} from "./shared/components/NavBar";
import {PersonalizedHomePage} from "./PersonalizedHomePage/PersonlizedHomePage";
import "./App.css"
import {QuizPage} from "./QuizPage/QuizPage";
import {SignUpForm} from "./SignUpForm";
import {Footer} from "./shared/components/Footer";
import {store} from "../store/store";



export const App = () => (

    <>
        <Provider store={store}>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='*' element={<FourOhFour />} />
                <Route path='/yourhomepage' element={<PersonalizedHomePage/>}/>
                <Route path='/recipes' element={<RecipePage />} />
                <Route exact path='/favorite' element={<FavoritePage/>} />
                <Route path='/quiz' element={<QuizPage/>} />
                <Route exact path='/sign-up' element={<SignUpForm/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
        </Provider>
    </>
)