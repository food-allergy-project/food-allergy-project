import React from "react";
import '../App.css';
import {Button, Card, Container, Row} from "react-bootstrap";
import {QuizButtonCards} from "./QuizButtonCards";


export const QuizButtons = () => {
    return (
        <>

            <Card body style={{height: '30rem'}} border="light">
                <Container>

                    <Row ClassName='mt-5 py-5 justify-content-center'>
                        <QuizButtonCards/>
                    </Row>
                    <div className='text-center'>
                        <Button variant="success" className='buttonSize'>Submit Quiz</Button>
                    </div>
                </Container>
            </Card>
        </>
    )
}
