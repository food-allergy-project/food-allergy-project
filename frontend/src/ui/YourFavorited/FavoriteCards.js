import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import "./FavoritedCardRecipe.css"


export function FavoriteCards(props) {
    console.log(props)
    const {recipes} = props
//todo if recipes is empty display some message// say something like no recipes found, make sure to add recipes//
    return (

        <>
            {
                recipes.map((recipe) => {
                    return (
                        <Container>
                            <Row>
                            <Col className="justify-content-center align-content-center">
                                <Card bg='light' text='dark' className="favoriteRecipeCardSize mt-5">
                                    <Card.Img variant="top" className="favoriteRecipeCardImg"
                                              src={
                                                  recipe.recipeImage
                                              }/>
                                    <Card.Body>
                                        <Card.Title className="FavoriteRecipeCards">
                                            {
                                                recipe.recipeTitle
                                            }</Card.Title>
                                    </Card.Body>
                                    <Button>
                                        go to recipe
                                    </Button>
                                </Card>
                            </Col>
                            </Row>
                        </Container>
                    )
                })
            }
        </>
    )
}