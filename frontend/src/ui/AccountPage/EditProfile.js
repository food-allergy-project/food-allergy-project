import React, {useState} from "react";
import {Button, Container, Modal} from "react-bootstrap";
import {EditProfileForm} from "./EditProfileForm";
import "../App.css"







export function EditProfile () {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Button variant="success" onClick={handleShow} className="mb-5">
                Edit Profile
            </Button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditProfileForm />
                </Modal.Body>
            </Modal>
        </>
    );
}


