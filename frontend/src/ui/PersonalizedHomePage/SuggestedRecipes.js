import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";


export const SuggestedRecipes = () => {
    return(
        <>

            <Card body style={{height: '30rem'}} border="light">
                <Container>
                    <Row>
                        <Col>
                            <h6 className='text-start py-5 text-uppercase'>Suggested Recipes: </h6>
                        </Col>
                    </Row>
                    <Row  ClassName='mt-5 py-5'>
                        <Col ClassName="justify-content-center">
                            <Card bg='light' text='dark' style={{height:"450px", width:"250px"}}>
                                <Card.Img variant="top"  className="img-fluid" width="auto" height="100%"  src="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                                    <Card.Title>Breakfast</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col ClassName="justify-content-center">
                            <Card style={{height:"450px", width:"250px"}}>
                                <Card.Img variant="top" className="img-fluid" width="auto" height="100%"  src="https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                                    <Card.Title>Lunch</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col ClassName="justify-content-center">
                            <Card style={{height:"450px", width:"250px"}}>
                                <Card.Img variant="top" className="img-fluid" width="auto" height="100%" src="https://images.pexels.com/photos/1070053/pexels-photo-1070053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                                    <Card.Title>Desserts</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col ClassName="justify-content-center">
                            <Card style={{height:"450px", width:"250px"}}>
                                <Card.Img variant="top" className="img-fluid" width="auto" height="100%" src="https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                                    <Card.Title>Snacks</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row  ClassName='mt-auto py-5'>
                        <Col ClassName="justify-content-center">
                            <Card bg='light' text='dark' style={{height:"400px", width:"255px"}}>
                                <Card.Img variant="top" style={{height:"350px"}} className="img-fluid" width="auto" height="100%" src="https://images.pexels.com/photos/6632286/pexels-photo-6632286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                                    <Card.Title>Breakfast</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col ClassName="justify-content-center">
                            <Card style={{height:"400px", width:"255px"}}>
                                <Card.Img variant="top" style={{height:"350px"}} className="img-fluid" width="auto" height="100%" src="https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                                    <Card.Title>Lunch</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col ClassName="justify-content-center">
                            <Card style={{height:"400px", width:"255px"}}>
                                <Card.Img variant="top" style={{height:"350px"}} className="img-fluid" width="auto" height="100%" src="https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                                    <Card.Title>Dinner</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col ClassName="justify-content-center">
                            <Card style={{height:"400px", width:"255px"}}>
                                <Card.Img variant="top" style={{height:"350px"}} className="img-fluid" width="auto" height="100%" src="https://images.pexels.com/photos/949067/pexels-photo-949067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                                <Card.Body>
                                    <Card.Title>Desserts</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </Card>
        </>
    )
}