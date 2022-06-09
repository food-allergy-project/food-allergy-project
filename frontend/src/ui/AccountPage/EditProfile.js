import React, {useState} from "react";
import {Button, Container, Modal} from "react-bootstrap";
import {EditProfileForm} from "./EditProfileForm";




export function EditProfile () {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container className='py-5'>
                <div className='text-end'>
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

                </Modal.Body>
            </Modal>
        </>
    );
}


