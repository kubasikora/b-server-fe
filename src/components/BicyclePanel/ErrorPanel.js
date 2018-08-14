import React from "react";
import { Panel } from "react-bootstrap";
import "./ErrorPanel.css";

const ErrorPanel = () => {
  return (
    <Panel>
      <Panel.Body>
        <p className="error-content">
          Usługa niedostępna, proszę spróbować później.
        </p>
      </Panel.Body>
    </Panel>
  );
};

export default ErrorPanel;
