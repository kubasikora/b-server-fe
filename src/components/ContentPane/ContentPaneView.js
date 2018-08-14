import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Panel } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import TransactionPanel from "../TransactionPanel";
import BicyclePanelView from "../BicyclePanel/BicycylePanelView";

class ContentPaneView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="page-content">
          <NavigationBar />
          <Route exact path="/" component={TransactionPanel} />
          <Route
            exact
            path="/loaner"
            render={() => <h1> Hello from loaner page! </h1>}
          />
          <Route
            exact
            path="/lender"
            render={() => <h1> Hello from lender page! </h1>}
          />
          <Redirect to="/" />
        </div>
      </Router>
    );
  }
}

export default ContentPaneView;
