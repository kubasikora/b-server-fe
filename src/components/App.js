import React, { Component } from "react";
import Header from "./Header";
import BicyclePanel from "../components/BicyclePanel";
import { Grid, Row, Col } from "react-bootstrap";
import Footer from "../components/Footer";
import ContentPane from "../components/ContentPane";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid fluid={true}>
          <Row>
            <Col sm={6} md={3}>
              <BicyclePanel />
            </Col>
            <Col sm={6} md={9}>
              <ContentPane />
            </Col>
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default App;
