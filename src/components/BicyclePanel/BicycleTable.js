import React from "react";
import { Table } from "react-bootstrap";
import BellGlyph from "./BellGlyph";

const BicycleTable = ({ bicycleInfo }) => {
  return (
    <Table striped bordered condensed hover responsive>
      <thead>
        <tr>
          <th>Stacja</th>
          <th>Rowery</th>
          <th>Stojaki</th>
        </tr>
      </thead>

      <tbody>
        {bicycleInfo.map(element => {
          return (
            <tr key={element.name}>
              <td>
                {element.name + "   "}
                {<BellGlyph hasTandem={element.has_tandem} />}
              </td>
              <td>{element.bikes}</td>
              <td>{element.bike_racks}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default BicycleTable;
