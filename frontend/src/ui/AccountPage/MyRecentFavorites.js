import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import {MyRecentFavoritesCards} from "./MyRecentFavoritesCards";

export const MyRecentFavorites = (props) => {
    const {myFavoritedRecipes} = props
    return (
        <>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h5 className='text-start pt-3'> Favorites: </h5>

                        </Col>
                    </Row>
                    <Row className='py-5 justify-content-center'>
                        {myFavoritedRecipes.map(myRecentFavorites => <MyRecentFavoritesCards myRecentFavorites = {myRecentFavorites} />)}
                    </Row>
                </Container>
            </div>
        </>
    )
}