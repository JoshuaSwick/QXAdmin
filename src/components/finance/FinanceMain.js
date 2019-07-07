import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, Link } from "react-router-dom";
import { userInfo } from "os";

function User() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today.setDate(today.getDate() - 1);

  var today = mm + "/" + dd + "/" + yyyy;

  const [data, setData] = useState([]);
  const [shipDate, setShipDate] = useState(today);

  useEffect(() => {
    var url = `https://qstrike.azurewebsites.net/api/reports/orders/ordersshipped?shipdate=${shipDate}`;

    axios.get(url).then(result => setData(result.data));
  }, [shipDate]);

  return (
    <div>
      <input id="shipDate" type="date" />
      <button
        className="btn btn-primary"
        onClick={() => setShipDate(document.getElementById("shipDate").value)}
      >
        GO
      </button>
      <br />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Ship Date</th>
            <th>Order ID</th>
            <th>Part ID</th>
            <th>Dealer</th>
            <th>Client</th>
          </tr>
        </thead>
        <tbody>
          {data.map(rep => (
            <tr key={rep.partID}>
              <td>{rep.shipDate}</td>
              <td>
                <Link
                  to={{
                    pathname: "/finance/invoice",
                    state: { orderid: rep.orderID, shipdate: shipDate }
                  }}
                >
                  {rep.orderID}
                </Link>
              </td>
              <td>{rep.partID}</td>
              <td>{rep.brandID === 6 ? rep.dealerName : rep.brand}</td>
              <td>{rep.client}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
