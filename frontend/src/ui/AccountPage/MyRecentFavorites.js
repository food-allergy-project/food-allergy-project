import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
import {MyRecipesCards} from "./MyRecipesCards";
import {MyRecentFavoritesCards} from "./MyRecentFavoritesCards";

export const MyRecentFavorites = () => {
    return (
        <>
            <Card body style={{height: '30rem'}} border='light'>
                <Container>
                    <Row>
                        <Col>
                            <h5 className='text-start pt-3'> Favorites: </h5>

                        </Col>
                    </Row>
                    <Row className='py-5 justify-content-center'>
                        <MyRecentFavoritesCards />
                    </Row>
                </Container>
            </Card>
        </>
    )
}