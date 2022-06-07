import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {render} from "react-dom";

    /*export function PostRecipeButton() {
        return (
            <Container className='py-5'>
                <Row>
                    <Col>
                        <div className='text-end'>
                            <Button variant="success" size="sm" >Post Recipe</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }*/

export function PostRecipeButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="success" onClick={handleShow}>
                Post Recipe
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

render(<PostRecipeButton/>);