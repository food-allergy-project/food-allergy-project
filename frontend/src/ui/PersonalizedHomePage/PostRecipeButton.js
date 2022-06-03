import React from "react";
import {Button, Container} from "react-bootstrap";


export function PostRecipeButton () {
    return (
        <Container className='p-5'>
            <div className='text-center'>
                <Button variant="success" size="sm">Post Recipe</Button>
            </div>
        </Container>
    )
}