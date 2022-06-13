import React from "react";
import {Col, Container, Row} from "react-bootstrap";




export function Instructions(props) {
    const {recipe} = props
    return(
        <>
            {
                    <Container>
                        <Row>
                            <Col>
                            <ul>
                                <li>
                                    {recipe.recipeInstructions}
                                </li>
                            </ul>
                                </Col>
                        </Row>
                    </Container>

                })

        </>
    )
}