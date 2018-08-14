import React from "react";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

class LoanerPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ""
    }
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    })
  } 

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  render() {
    return (
      <div>
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>
              Wpisz swój login aby sprawdzić komu wisisz piwko!
            </ControlLabel>

            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Login"
              onChange={this.handleChange}  
              autoComplete="off"
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default LoanerPanel;
