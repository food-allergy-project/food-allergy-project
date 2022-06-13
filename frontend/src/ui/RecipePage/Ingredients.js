import React from "react";
import {Col, Container, Row} from "react-bootstrap";


export const Ingredients = (props) => {
    const {
        recipe
    } = props

    return (


        <>
            <Container>
                <Row>
                    <Col>
                        <p>
                            {recipe.recipeIngredients}
                        </p>
                    </Col>

                </Row>
            </Container>

        </>
    )

}