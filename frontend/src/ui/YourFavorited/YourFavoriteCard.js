import React from "react";
import {Card, Col} from "react-bootstrap";
import "./FavoritedCardRecipe.css"


export function FavoriteRecipeCardLunch({recipes}) {


    return (
        <>
            {
                /*recipes.map((recipe) => {
                    return (
                        <Col className="justify-content-center align-content-center">
                            <Card bg='light' text='dark' className="favoriteRecipeCardSize mt-5">
                                <Card.Img variant="top" className="favoriteRecipeCardImg"
                                          src={
                                              recipe.img
                                          }/>
                                <Card.Body>
                                    <Card.Title className="FavoriteRecipeCards">{
                                        recipe.name
                                    }</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })*/
            }
        </>
    )
}