import React from "react";
import {Figure, Nav} from "react-bootstrap";
import FigureImage from "react-bootstrap/FigureImage";
import FoodieLogo from '../imgs/brandlogo.png'
import {Link} from "react-router-dom";
import {SignOutComponent} from "./SignOut";



export function NavBar () {
    return (
        <>
            <div className='text-center'>
                <Figure>
                    <Link to="/">
                    <FigureImage
                        src= {FoodieLogo}
                        alt="Allergic Foodies Logo"
                        width={500}
                        height={100}
                        h
                    />
                </Link>
                </Figure>
                <Nav className='justify-content-center' activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/yourhomepage" className={'text-dark'}>My Homepage</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/account" className={'text-dark'}>My Account</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/favorites" className={'text-dark'}>My Favorites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/sign-in" className={'text-dark'}>Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <SignOutComponent/>
                    </Nav.Item>
                </Nav>

            </div>
        </>
    )
}