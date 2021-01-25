import React, { useState } from 'react';

import CancelSection from './CancelSection'

import Model from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { render } from 'react-dom';

export default function CancelWarning(props) {
    // show is a variable, and setShow changes it's value
    const [show, setShow] = useState(props.show);

    // event listener hide the warning
    const hideWarning = () => setShow(false);

    const removeSection = () => CancelSection(e, props.parent)

    return(
        <Modal
            show={show}
            onHide={hideWarning}
            backdrop="static"
            keyboard={false}
        >
            <Model.Header closeButton>
                <Model.Title>Confirm</Model.Title>
            </Model.Header>
            <Model.Body>
                Do you really want to delte what you just wrote? think again.
            </Model.Body>
            <Model.Footer>
                <Button variant="primary" onClick={hideWarning}>Back</Button>
                <Button variant="danger" onClick={removeSection}>Delete</Button>
            </Model.Footer>
        </Modal>
    )
}