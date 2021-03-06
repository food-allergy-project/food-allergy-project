import React from "react";
import '../AccountPage/AccountPage.css'
import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

export function MyRecentFavoritesCards(props) {
    const {myRecentFavorites} = props

    return (
        <>


            <Col>
                <Link
                      to={`/recipe/${myRecentFavorites.recipeId}`}
                      reloadDocument={true}
                >
                <Card bg='light' text='dark' className='myRecipeCardSize mt-4'>
                    <Card.Img variant="top" className='myRecipeCardImg'
                              src={
                                  myRecentFavorites.recipeImage
                              }
                    />
                    <Card.Body>
                        <Card.Title className='myRecipeCardTitle'>
                            {myRecentFavorites.recipeTitle}
                        </Card.Title>
                    </Card.Body>
                </Card>
                </Link>
            </Col>


        </>
    )
}