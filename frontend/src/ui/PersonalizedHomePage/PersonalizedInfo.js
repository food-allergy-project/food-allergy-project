import React from "react";
import {Card, Col, Container, Figure, Row} from "react-bootstrap";
import FigureImage from "react-bootstrap/FigureImage";
import avatarImage from "./imgs/greenAvatar.png"


export const PersonalizedInfo = () => {
    return(
        <>

            <Card body bg="light" border="light" style={{height: '20rem'}}>
                <Container>
                    <Row>
                        <Col xs={6} className='justify-content-center text-center'>
                            <Figure>
                                <FigureImage roundedCircle className='mt-5'
                                    src={avatarImage}
                                    alt="avatar"
                                    width={120}
                                    height={120}
                                />
                            </Figure>
                            <p className='justify-content-center text-center'>Allergic to: dairy,gluten</p>
                        </Col>
                        <Col xs={6}>
                            <h3 className='text-end px-5 pt-5 mt-5'>
                                Welcome,
                            </h3>
                            <p className='text-end px-5'>This is Your Personalized Homepage, Adam!</p>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </>
    )
}