import React from "react";
import {Card, Col} from "react-bootstrap";
import '../AccountPage/AccountPage.css'

export function MyRecipesCards (props) {
    const {myRecipesSection} = props
    return (
        <>
            <Col className='justify-content-center align-content-center'>
                <Card bg='light' text='dark' className='myRecipeCardSize mt-4'>
                    <Card.Img variant="top" className='myRecipeCardImg'
                              src={
                                  myRecipesSection.recipeImage
                              }
                    />
                    <Card.Body>
                        <Card.Title className='myRecipeCardTitle'>
                            {myRecipesSection.recipeTitle}
                        </Card.Title>
                    </Card.Body>
                </Card>

            </Col>

        </>
    )
}