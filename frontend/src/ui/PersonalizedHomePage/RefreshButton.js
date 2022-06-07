import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";


export function RefreshRecipesButton() {
    return (
        <Container className='py-2 mt-5' border="light">
            <Row>
                <Col>
                    <div className='text-end'>
                        <Button variant="success" size="sm">Refresh</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}