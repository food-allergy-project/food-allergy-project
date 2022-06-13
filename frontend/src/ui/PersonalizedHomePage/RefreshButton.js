import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";


export function RefreshRecipesButton() {
    return (
        <Container className='mt-5' border="light">
            <Row>
                <Col>
                    <div className='text-end'>
                        <Button variant="success">Refresh</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}