import React from "react";
import {Card, Col} from "react-bootstrap";
import "./PersonalizedHomePageStyle.css"


export function SuggestedRecipeCards( props ) {
    const {recipe} = props
    return (
        <>
            <Col className="justify-content-center align-content-center">
                <Card className="recipeCardSize mt-5 cardBackground2">
                    <Card.Img variant="top" className="recipeCardImg"
                              src={
                                  recipe.recipeImage
                              }/>
                    <Card.Body>
                        <Card.Title className="recipeCardTitle">
                            {recipe.recipeTitle}
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
            </>
    )
}