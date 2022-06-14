import React from "react";
import {Card, Col} from "react-bootstrap";
import "./PersonalizedHomePageStyle.css"
import {Link} from "react-router-dom";


export function SuggestedRecipeCards( props ) {
    const {recipe} = props
    const{recipeId} = recipe
    return (
        <>
            <Col className="justify-content-center align-content-center">

                <Card className="recipeCardSize mt-5 cardBackground2">
                    <Link
                        className='text-center btn-secondary'
                        to={`/recipe/${recipeId}`}
                        reloadDocument={true}
                    >
                        Click for detailed recipe
                    </Link>
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