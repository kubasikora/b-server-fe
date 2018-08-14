import React from "react";
import { Jumbotron } from "react-bootstrap";

const Header = () => {
  const titleStyle = {
    textAlign: "right"
  };

  return (
    <Jumbotron style={titleStyle}>
      <div style={{ marginRight: "5%" }}>
        <h2> Server piwny DS Riviera </h2>
        <p>
          Bo picie piwka to nie tylko obowiązek ale i również przyjemność...
        </p>
      </div>
    </Jumbotron>
  );
};

export default Header;
