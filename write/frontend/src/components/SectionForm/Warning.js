import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function Warning(props) {
    // Go back
    const close = e => {
        let data = {
            path: 'backward',
        };
        // Send data to form
        props.dataToForm(data);
    };

    // Go "forward" and delete it
    const remove = e => {
        let data = {
            path: 'forward',
        }
        // Send data to form
        props.dataToForm(data);
    }

    
    return (
        <Modal
            show={props.warn}
            onHide={close}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Warning</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you really want to delete all contents of this form?</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" id="froward" onClick={remove}>Delete</Button>
            </Modal.Footer>
        </Modal>
    )
}