import React, { useState, useEffect } from "react";
import axios from "axios";
import FactoryDropDown from "../dropdowns/factoryDropDown";

const ReportOrdersShipped = () => {
  return (
    <div>
      <h1>Report Orders Shipped</h1>
      <br />
      <br />
      <FactoryDropDown />
      <br />
      <OrdersShipped factory="pmp" />
    </div>
  );
};

function OrdersShipped({ factory }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://qx.azurewebsites.net/api/rep")
      .then(result => setData(result.data));
  }, []);

  return (
    <div>
      {factory}
      <table className="table table-striped">
        <tr>
          <th>Rep ID</th>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        {data.map(rep => (
          <tr key={rep.RepID}>
            <td>{rep.RepID}</td>
            <td>{rep.UserID}</td>
            <td>{rep.FirstName}</td>
            <td>{rep.LastName}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ReportOrdersShipped;
