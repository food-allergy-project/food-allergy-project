import React from "react";
import { Col, Container, Row} from "react-bootstrap";


// export const Ingredients = (props) => {
//     const {
//         recipe
//     } = props


export function Ingredients(props) {
    {
        const recipe = {props}
        return (
            <>
                {
                    recipe.map((recipe) => {
                        return (
                            <Container>
                                <Row>
                                    <Col>
                                        <p>
                                            {recipe.amount} {recipe.value} {recipe.name}
                                        </p>
                                    </Col>

                                </Row>
                            </Container>
                        )
                    })
                }
            </>
        )
    }
}