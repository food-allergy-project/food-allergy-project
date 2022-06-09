import React, {useState} from "react";
import {Button, Container, Modal} from "react-bootstrap";
import {EditProfileForm} from "./EditProfileForm";
import {PostRecipeForm} from "./EditTestForm";






export function EditProfile () {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container>
                <div className='text-center'>
                    <Button variant='success' onClick={handleShow}>
                        Edit Profile
                    </Button>
                </div>
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PostRecipeForm />
                </Modal.Body>
            </Modal>
        </>
    );
}


