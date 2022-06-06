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



export const App = ({store}) => (


    <>
        <Provider store={store}>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route  path='/sign-in' element={<SignIn />} />
                <Route path='*' element={<FourOhFour />} />
                <Route path='/yourhomepage' element={<PersonalizedHomePage/>}/>
                <Route path='/recipes' element={<RecipePage />} />
                <Route exact path='/favorite' element={<FavoritePage/>} />
            </Routes>
        </BrowserRouter>
        </Provider>
    </>
)