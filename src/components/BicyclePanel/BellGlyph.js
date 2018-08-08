import React from "react";
import { Glyphicon } from "react-bootstrap";

const BellGlyph = props => {
  return props.hasTandem ? (
    <Glyphicon
      glyph="bell"
      title="Uwaga, tandem!"
      style={{ float: "right", marginTop: "3px" }}
    />
  ) : null;
};

export default BellGlyph;
