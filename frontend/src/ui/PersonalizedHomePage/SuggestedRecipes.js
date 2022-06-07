import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import '../App.css'
import {SuggestedRecipeCards} from "./SuggestedRecipeCards";

export const SuggestedRecipes = (props) => {
    const {recipes} = props
    console.log(recipes)
    return(
        <>

            <Card body style={{height: '30rem'}} border="light">
                <Container>
                    <Row>
                        <Col>
                            <h6 className='text-start pt-3 text-uppercase'>Suggested Recipes: </h6>
                        </Col>
                    </Row>
                    <Row  className='mt-5 py-5 d-flex align-items-center'>
                        {recipes.map(recipe => <SuggestedRecipeCards recipe = {recipe}/>)}
                    </Row>
                </Container>
            </Card>
        </>
    )
}