import React from "react";
import {Col, Container, Figure} from "react-bootstrap";
import FigureImage from "react-bootstrap/FigureImage";
import avatarImage2 from "./imgs/greenAvatar2.png"




export const UserProfileSection = () => {
    return (
        <>
            <div className='p-3 my-4 bg-light'>
                <Container className='text-center'>
                    <Col>
                        <Figure>
                            <FigureImage roundedCircle className='mt-5 mx-5'
                                         src={avatarImage2}
                                         alt="user avatar"
                                         width={120}
                                         height={120}
                            />
                        </Figure>
                        <div>
                            <p> Your Name</p>
                            <p> allergies</p>
                        </div>
                    </Col>
                </Container>
            </div>

        </>
    )
}