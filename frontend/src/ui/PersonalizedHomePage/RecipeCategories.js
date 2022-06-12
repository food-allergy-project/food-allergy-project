import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import breakfast from "./imgs/breakfastcoverimg.png"
import lunch from "./imgs/lunchcoverimg.png"
import dinner from "./imgs/dinnercoverimg.png"
import dessert from "./imgs/dessertcoverimg.png"
import snack from "./imgs/snackcoverimg.png"


export const RecipeCategories = () => {
    return(
        <>

            <div>
                <Container>
                    <Row>
                        <Col>
                            <h6 className='text-start py-5 text-uppercase'>Recipes free from your allergens:</h6>
                        </Col>
                    </Row>
                    <Row  ClassName='mt-5 py-5'>
                        <Col ClassName="justify-content-center">
                            <Card bg='light' text='dark'>
                                <Card.Img variant="top" src={breakfast} />
                                <Card.Body>
                                    <Card.Title>Breakfast</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col ClassName="justify-content-center">
                            <Card bg='light' text='dark'>
                                <Card.Img variant="top" src={lunch} />
                                <Card.Body>
                                    <Card.Title>Lunch</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col ClassName="justify-content-center">
                            <Card bg='light' text='dark'>
                                <Card.Img variant="top" src={dinner} />
                                <Card.Body>
                                    <Card.Title>Dinner</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col ClassName="justify-content-center">
                            <Card bg='light' text='dark'>
                                <Card.Img variant="top" src={dessert} />
                                <Card.Body>
                                    <Card.Title>Desserts</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col ClassName="justify-content-center">
                            <Card bg='light' text='dark'>
                                <Card.Img variant="top" src={snack} />
                                <Card.Body>
                                    <Card.Title>Snacks</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )
}