import React from "react";
import {Button, Container, Figure} from "react-bootstrap";
import FigureImage from "react-bootstrap/FigureImage";
import '../App.css';
import animation from "../shared/imgs/landingpagegif.gif";

export function TakeQuizButtonAndImg () {
    return (
        <Container className='py-5 my-5'>
            <div className='text-center'>
                <Button variant="success" className='buttonBlockSize'>Take Quiz</Button>
            </div>
            <div className='pt-5 my-5 text-center'>
                <Figure>
                    <FigureImage
                        src={animation}
                        alt="Food1"
                        width={1000}
                        height={1000}
                    />
                </Figure>
            </div>
        </Container>
    )
}