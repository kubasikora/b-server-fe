import React from "react";
import { Modal, Button, FormGroup, FormControl } from "react-bootstrap";

class LoginPopupView extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      valuePassword: "",
      valueLogin: ""
    }

  }

  handlePasswordChange = event =>{
    this.setState({
      valuePassword : event.target.value
    })
  }
  handleLoginChange = event =>{
    this.setState({
      valueLogin : event.target.value
    })
  }

  logIn = ()=>{
    this.props.hideLoginPopup();
    this.props.logIn(this.state);
    this.setState({
      valuePassword: "",
      valueLogin: ""

    })
  }
  render() {
    return (
      <Modal show={this.props.show}>
        <Modal.Header>
          <Modal.Title>Zaloguj się</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <FormGroup controlId="loginForm">
            Login
            <FormControl type="login" placeholder="Login" value={this.state.valueLogin} onChange={this.handleLoginChange}/>

          </FormGroup>
          <FormGroup controlId="passwordForm">
            Hasło
            <FormControl type="password" placeholder="Hasło" value={this.state.valuePassword} onChange={this.handlePasswordChange}/>

          </FormGroup>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.props.hideLoginPopup}>Wyjdź</Button>
          <Button bsStyle="primary" onClick={this.logIn}>Zaloguj</Button>
        </Modal.Footer>
      </Modal>
    );
  };
}

export default LoginPopupView;