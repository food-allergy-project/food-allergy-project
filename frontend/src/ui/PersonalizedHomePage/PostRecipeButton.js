import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";


    export function PostRecipeButton() {
        return (
            <Container className='py-5'>
                <Row>
                    <Col>
                        <div className='text-end'>
                            <Button variant="success" size="sm" >Post Recipe</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }

