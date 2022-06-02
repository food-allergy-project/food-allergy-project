import React from "react";
import {Button, Container, Figure} from "react-bootstrap";
import FigureImage from "react-bootstrap/FigureImage";
import '../App.css';

export function TakeQuizButtonAndImg () {
    return (
        <Container className='p-5 my-5'>
            <div className='text-center'>
                <Button variant="success" className='buttonBlockSize'>Take Quiz</Button>
            </div>
            <div className='p-5 my-5 text-center'>
                <Figure>
                    <FigureImage
                        src="https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_960_720.jpg"
                        alt="Food1"
                        width={800}
                        height={800}
                    />
                </Figure>
            </div>
        </Container>
    )
}