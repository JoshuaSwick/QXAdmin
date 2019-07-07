import React, { useState, useEffect } from "react";
import axios from "axios";
import FactoryDropDown from "../dropdowns/factoryDropDown";
import BrandDropDown from "../dropdowns/brandDropDown";

const ReportOrdersShipped = () => {
  return (
    <div>
      <h1>Report Orders Shipped</h1>
      <br />
      <br />
      <FactoryDropDown />
      <BrandDropDown />
      <br />
      {/* <OrdersShipped factory="pmp" /> */}
    </div>
  );
};

function OrdersShipped({ factory }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://qstrike.azurewebsites.net/api/reports/orders/ordersshipped")
      .then(result => setData(result.data));
  }, []);

  return (
    <div>
      {factory}
      <table className="table table-striped">
        <tr>
          <th>Order ID</th>
          <th>Part ID</th>
          <th>Brand</th>
          <th>Factory</th>
        </tr>
        {data.map(orders => (
          <tr key={orders.OrderID}>
            <td>{orders.OrderID}</td>
            <td>{orders.PartID}</td>
            <td>{orders.BrandName}</td>
            <td>{orders.FactoryName}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default ReportOrdersShipped;
