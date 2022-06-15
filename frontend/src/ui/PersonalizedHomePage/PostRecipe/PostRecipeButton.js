import React, {useState} from "react";
import {Button, Container, Modal} from "react-bootstrap";
import {PostRecipeForm} from "./PostRecipeForm";


export const PostRecipeButton = (props) => {
    const {profileId, allergies} = props
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
            <Modal show={show} onHide={handleClose} size="lg" >
                <Modal.Header closeButton className="ourBackground ourBorder">
                    <Modal.Title>Post Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PostRecipeForm profileId = {profileId} allergies={allergies}/>
                </Modal.Body>
            </Modal>
        </>
    );
}

