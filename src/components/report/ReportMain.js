import React from "react";
import { Link } from "react-router-dom";

const ReportMain = () => {
  const componentDidMount = () => {
    console.log("mount it!");
  };

  return (
    <div>
      <h1>Reports Main</h1>

      <table id="table_id" className="table table-striped">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1 Data 1</td>
            <td>Row 1 Data 2</td>
          </tr>
          <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
          </tr>
        </tbody>
      </table>

      <Link to="report/reportorderssshipped" className="btn btn-primary btn-lb">
        Home
      </Link>
    </div>
  );
};

export default ReportMain;
