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
                            <ol>
                                <li>
                                    {recipe.recipeInstructions}
                                </li>
                            </ol>
                                </Col>
                        </Row>
                    </Container>

                }

        </>
    )
}