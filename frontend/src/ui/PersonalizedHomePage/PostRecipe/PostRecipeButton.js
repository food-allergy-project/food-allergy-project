import React, {useState} from "react";
import {Button, Container, Modal} from "react-bootstrap";
import {PostRecipeForm} from "./PostRecipeForm";

export const PostRecipeButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container className='py-5'>
                <div className='text-end'>
                    <Button variant="success" onClick={handleShow}>
                        Post Recipe
                    </Button>
                </div>
            </Container>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Post Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PostRecipeForm/>
                </Modal.Body>
            </Modal>
        </>
    );
}

