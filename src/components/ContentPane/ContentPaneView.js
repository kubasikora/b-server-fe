import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Panel } from "react-bootstrap";
import NavigationBar from "../NavigationBar";
import TransactionPanel from "../TransactionPanel";
import LoanerPanel from "../LoanerPanel";
import LenderPanel from "../LenderPanel";
import BicyclePanelView from "../BicyclePanel/BicycylePanelView";

class ContentPaneView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <NavigationBar />
          <Panel>
            <Panel.Body>
              <Route exact path="/" component={TransactionPanel} />
              <Route exact path="/loaner" component={LoanerPanel} />
              <Route exact path="/lender" component={LenderPanel} />
              {/*<Redirect to="/" />*/}
            </Panel.Body>
          </Panel>
        </div>
      </Router>
    );
  }
}

export default ContentPaneView;
