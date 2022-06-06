import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {MyRecipesCards} from "./MyRecipesCards";

export const MyRecipes = () => {
    return(
        <>
            <Card body style={{height: '30rem'}} border='light'>
                <Container>
                    <Row>
                        <Col>
                            <h6 className='text-start pt-3 text-uppercase'> My Recipes: </h6>

                        </Col>
                    </Row>
                    <Row className='mt-5 py-5 justify-content-center'>
                        <MyRecipesCards />
                    </Row>
                </Container>
            </Card>
        </>
    )
}