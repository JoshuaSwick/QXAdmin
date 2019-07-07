import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Invoice.css";

function InvoiceProLook(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://qstrike.azurewebsites.net/api/brands/6/reps")
      .then(result => setData(result.data));
  }, []);

  return (
    <div>
      <br />
      <article>
        <h1>{props.location.orderid} - Test</h1>
        <h1 className="invoiceH1">Recipient</h1>
        <address className="addressInvoice">
          <p>Dealer Name</p>
        </address>
        <table className="tableMeta">
          <tr>
            <th className="invoiceTableHeaderAndCell invoiceTableHeader">
              <span>Invoice #</span>
            </th>
            <td className="invoiceTableHeaderAndCell invoiceTableCell">
              <span>101138</span>
            </td>
          </tr>
          <tr>
            <th className="invoiceTableHeaderAndCell invoiceTableHeader">
              <span>Date</span>
            </th>
            <td className="invoiceTableHeaderAndCell invoiceTableCell">
              <span>January 1, 2012</span>
            </td>
          </tr>
          <tr>
            <th className="invoiceTableHeaderAndCell invoiceTableHeader">
              <span>Amount Due</span>
            </th>
            <td className="invoiceTableHeaderAndCell invoiceTableCell">
              <span id="prefix">$</span>
              <span>700.00</span>
            </td>
          </tr>
        </table>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <table className="tableInventory">
          <thead>
            <tr>
              <th className="invoiceTableHeaderAndCell invoiceTableHeader">
                <span>Item</span>
              </th>
              <th className="invoiceTableHeaderAndCell invoiceTableHeader">
                <span>Description</span>
              </th>
              <th className="invoiceTableHeaderAndCell invoiceTableHeader">
                <span>Rate</span>
              </th>
              <th className="invoiceTableHeaderAndCell invoiceTableHeader">
                <span>Quantity</span>
              </th>
              <th className="invoiceTableHeaderAndCell invoiceTableHeader">
                <span>Price</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="invoiceTableHeaderAndCell invoiceTableCell">
                <span>Front End Consultation</span>
              </td>
              <td className="invoiceTableHeaderAndCell invoiceTableCell">
                <span>Experience Review</span>
              </td>
              <td className="invoiceTableHeaderAndCell invoiceTableCell">
                <span data-prefix>$</span>
                <span>150.00</span>
              </td>
              <td className="invoiceTableHeaderAndCell invoiceTableCell">
                <span>4</span>
              </td>
              <td className="invoiceTableHeaderAndCell invoiceTableCell">
                <span data-prefix>$</span>
                <span>600.00</span>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <table className="tableBalance">
          <tr>
            <th className="invoiceTableHeaderAndCell invoiceTableHeader">
              <span>Total</span>
            </th>
            <td className="invoiceTableHeaderAndCell invoiceTableCell">
              <span data-prefix>$</span>
              <span>600.00</span>
            </td>
          </tr>
          <tr>
            <th className="invoiceTableHeaderAndCell invoiceTableHeader">
              <span>Amount Paid</span>
            </th>
            <td className="invoiceTableHeaderAndCell invoiceTableCell">
              <span data-prefix>$</span>
              <span>0.00</span>
            </td>
          </tr>
          <tr>
            <th className="invoiceTableHeaderAndCell invoiceTableHeader">
              <span>Balance Due</span>
            </th>
            <td className="invoiceTableHeaderAndCell invoiceTableCell">
              <span data-prefix>$</span>
              <span>600.00</span>
            </td>
          </tr>
        </table>
      </article>
      <aside>
        <h1>
          <span>Additional Notes</span>
        </h1>
        <div>
          <p>
            A finance charge of 1.5% will be made on unpaid balances after 30
            days.
          </p>
        </div>
      </aside>
      <button onclick="javascript:demoFromHTML();">PDF</button>
    </div>
  );
}

export default InvoiceProLook;
