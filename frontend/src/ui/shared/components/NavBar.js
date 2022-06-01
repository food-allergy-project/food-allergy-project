import React from "react";
import {Figure, Nav} from "react-bootstrap";
import FigureImage from "react-bootstrap/FigureImage";
import FoodieLogo from '../imgs/allergicfoodieslogo.png'
import Navbar from "react-bootstrap/Navbar";
import {useSelector} from "react-redux";

export function NavBar () {
    const auth = useSelector(state => state.auth);
    return (
        <>
            <div className='text-center'>
                <Figure>
                    <FigureImage
                        src= {FoodieLogo}
                        alt="Allergic Foodies Logo"
                        width={500}
                        height={100}
                    />
                </Figure>
                <NavBar>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-center" activeKey="/home">

                            <Nav.Item>
                                <Nav.Link href="/home" className={'text-dark'}>My Homepage</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                {auth === null && (
                                 <>
                                    <Nav.Link eventKey="link-1" className={'text-dark'}>Login</Nav.Link>
                                 </>
                                )}
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2" className={'text-dark'}>My Account</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2" className={'text-dark'}>My Favorite</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2" className={'text-dark'}>Logout</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </NavBar>
            </div>

        </>
    )
}