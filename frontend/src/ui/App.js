import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import {RecipePage} from './RecipePage/RecipePage'
import { FavoritePage} from './YourFavorited/FavoritePage'
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
import {PrivateRoute} from "./shared/components/PrivateRoutes/PrivateRoute";



export const App = ({store}) => (

    <>
        <Provider store={store}>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/recipe/:recipeId' element={ <PrivateRoute><RecipePage /></PrivateRoute> } recipeId=':recipeId'/>
                <Route path='/' element={<Home/>} />
                <Route path='*' element={<FourOhFour/>} />
                <Route path='/account' element={<PrivateRoute><AccountPage /></PrivateRoute>} />
                <Route path='/sign-in' element={<SignInForm />} />
                <Route path='/yourhomepage' element={<PrivateRoute><PersonalizedHomePage/></PrivateRoute>}/>
                <Route exact path='/favorites' element={<PrivateRoute><FavoritePage/></PrivateRoute>} />
                <Route path='/quiz' element={<PrivateRoute><QuizPage/></PrivateRoute>} />
                <Route exact path='/sign-up' element={<SignUpForm/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
        </Provider>
    </>
)