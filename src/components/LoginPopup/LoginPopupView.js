import React from "react";
import { Modal, Button } from "react-bootstrap";

const LoginPopupView = props => {
    return (
        <Modal show={props.show}>
          <Modal.Header>
            <Modal.Title>Zaloguj się</Modal.Title>
          </Modal.Header>

          <Modal.Body>Podaj swój login i hasło nibba</Modal.Body>

          <Modal.Footer>
            <Button onClick={props.hideLoginPopup}>Wyjdź</Button>
            <Button bsStyle="primary" onClick={props.hideLoginPopup}>Zaloguj</Button>
          </Modal.Footer>
        </Modal>
    );
};

export default LoginPopupView;