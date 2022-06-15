import React from "react";
import {Card, Col} from "react-bootstrap";
import '../AccountPage/AccountPage.css'

export function MyRecipesCards (props) {
    const {recipe} = props
    console.log(recipe)

    return (
        <>
            <Col className='justify-content-center align-content-center'>
                <Card bg='light' text='dark' className='myRecipeCardSize mt-4'>
                    <Card.Img variant="top" className='myRecipeCardImg'
                              src={
                                  recipe.recipeImage
                              }
                    />

                    <Card.Body>
                        <Card.Title className='myRecipeCardTitle'>
                            {recipe.recipeTitle}
                        </Card.Title>
                    </Card.Body>
                </Card>

            </Col>

        </>
    )
}