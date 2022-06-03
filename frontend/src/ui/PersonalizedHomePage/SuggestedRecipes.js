import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import '../App.css'
import {SuggestedRecipeCards} from "./SuggestedRecipeCards";

export const SuggestedRecipes = () => {
    return(
        <>

            <Card body style={{height: '30rem'}} border="light">
                <Container>
                    <Row>
                        <Col>
                            <h6 className='text-start pt-5 text-uppercase'>Suggested Recipes: </h6>
                        </Col>
                    </Row>
                    <Row  ClassName='mt-5 py-5'>
                        <SuggestedRecipeCards/>
                    </Row>
                </Container>
            </Card>
        </>
    )
}