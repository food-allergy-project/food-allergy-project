import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import { FavoritePage} from './FavoritePage'
import {RecipePage} from './RecipePage'
import React from 'react'
import {SignInForm} from "./SignInForm";
import { Provider } from 'react-redux'
import {NavBar} from "./shared/components/NavBar";
import {PersonalizedHomePage} from "./PersonalizedHomePage/PersonlizedHomePage";
import "./App.css"
import {QuizPage} from "./QuizPage/QuizPage";
import {SignUpForm} from "./SignUpForm";
import {Footer} from "./shared/components/Footer";




import {AccountPage} from "./AccountPage/AccountPage";

export const App = ({store}) => (

    <>
        <Provider store={store}>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<FourOhFour/>} />
                <Route path='/account' element={<AccountPage />} />
                <Route path='/sign-in' element={<SignInForm />} />
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