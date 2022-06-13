import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import '../App.css'
import {SuggestedRecipeCards} from "./SuggestedRecipeCards";
import {RefreshRecipesButton} from "./RefreshButton";

export const SuggestedRecipes = (props) => {
    const {recipes} = props
    console.log(recipes)
    return(
        <>

            <div>
                <Container>
                    <Row>
                        <Col>
                            <h6 className='text-start pt-5 text-uppercase'>Suggested Recipes: </h6>
                            <RefreshRecipesButton/>
                        </Col>
                    </Row>
                    <Row  className='py-5 mb-5 d-flex align-items-center'>
                        {recipes.map(recipe => <SuggestedRecipeCards recipe = {recipe}/>)}
                    </Row>
                </Container>
                <div className="my-5">
                    <Row>
                        <Col></Col>
                    </Row>
                </div>
            </div>
        </>
    )
}