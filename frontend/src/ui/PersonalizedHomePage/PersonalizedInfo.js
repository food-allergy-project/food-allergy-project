import React from "react";
import {Card, Col, Container, Figure, Row} from "react-bootstrap";
import FigureImage from "react-bootstrap/FigureImage";
import avatarImage from "../shared/imgs/fawn_avatar.png"


export const PersonalizedInfo = (props) => {
    const {profile,allergies} = props
    return(
        <>

            <Card body className="ourBackground">
                <Container>
                    <Row>
                        <Col className='justify-content-center text-start'>
                            <Figure>
                                <FigureImage roundedCircle className='mt-2 mx-5'
                                    src={avatarImage}
                                    alt="avatar"
                                    width={120}
                                    height={120}
                                />
                            </Figure>
                            <>
                                <ul className='justify-content-center text-start mr-5 px-4 mb-5'> Allergic to: { allergies.map(allergy => <li key={allergy.allergyName} className="mx-1">{allergy.allergyName }</li> )} </ul>
                            </>
                        </Col>
                        <Col>
                            <h3 className='text-end pt-5 mt-1'>
                                Welcome,
                            </h3>

                             {profile && <p className='text-end'> This is Your Personalized Homepage, {profile.profileFullName}!</p>}
                        </Col>
                    </Row>
                </Container>
            </Card>
        </>
    )
}