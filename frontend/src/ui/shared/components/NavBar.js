import React from "react";
import {Figure, Nav} from "react-bootstrap";
import FigureImage from "react-bootstrap/FigureImage";
import FoodieLogo from '../imgs/logo-carrot.png'



export function NavBar () {
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
                <Nav className='justify-content-center' activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home" className={'text-dark'}>My Homepage</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className={'text-dark'}>My Account</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className={'text-dark'}>My Favorites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className={'text-dark'}>Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" className={'text-dark'}>Logout</Nav.Link>
                    </Nav.Item>
                </Nav>

            </div>
        </>
    )
}