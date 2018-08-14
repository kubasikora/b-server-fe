import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Panel } from "react-bootstrap";
import NavigationBar from "../NavigationBar";
import TransactionPanel from "../TransactionPanel";
import LoanerPanel from "../LoanerPanel";
import LenderPanel from "../LenderPanel";
import LoginPopup from "../LoginPopup";

class ContentPaneView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <LoginPopup show={this.props.loginPopup} />
          <Panel>
            <Panel.Body>
              <Route exact path="/" component={TransactionPanel} />
              <Route exact path="/loaner" component={LoanerPanel} />
              <Route exact path="/lender" component={LenderPanel} />
            </Panel.Body>
          </Panel>
        </div>
      </Router>
    );
  }
}

export default ContentPaneView;
