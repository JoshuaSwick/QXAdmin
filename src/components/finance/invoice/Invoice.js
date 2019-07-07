import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Invoice.css";
import logo from "./PLSInvoiceLogo.png";
import moment from "moment";

function Invoice(props) {
  const [data, setData] = useState([]);
  const [orderID, setOrderID] = useState([props.location.state.orderid]);
  const [shipDate, setShipDate] = useState([props.location.state.shipdate]);
  const [partsTotal, setPartsTotal] = useState([0]);
  const [grandTotal, setGrandTotal] = useState([0]);

  useEffect(() => {
    var url = `https://qstrike.azurewebsites.net/api/reports/orders/ordersshipped?shipdate=${shipDate}&orderid=${orderID}`;

    //axios.get(url).then(result => setData(result.data));

    axios.get(url).then(result => {
      setData(result.data);
      document.getElementById("po").textContent = "po number";
      document.getElementById("salesOrder").textContent = "sales order";
      document.getElementById("term").textContent = "term";
      document.getElementById("shipDate").textContent = "ship date";
      document.getElementById("paymentDueDate").textContent = "pdd";
      document.getElementById("rep").textContent = "rep";

      var totalParts = 0;
      var totalShipping = 0;
      var totalPromotion = 0;
      var totalTax = 0;

      for (var key in result.data) {
        //totals
        totalParts =
          parseFloat(totalParts) +
          parseFloat(result.data[key].totalPriceDealer);

        totalShipping =
          parseFloat(totalShipping) + parseFloat(result.data[key].shippingPart);
        setPartsTotal(totalParts);

        //
        if (key === "0") {
          //Totals

          totalTax = result.data[key].totalTax;
          totalPromotion = result.data[key].totalPromotion;

          var term = 0;

          if (result.data[key].brandCodeID === "PROLOOKSPORTS") {
            term = 45;
          } else if (result.data[key].brandCodeID === "RIDDELL") {
            term = 10;
          } else {
            term = 30;
          }

          //Payment Date
          var paymentDate = moment(result.data[key].shipDate, "MM-DD-YYYY")
            .add(term, "days")
            .calendar();

          //Invoice Information
          document.getElementById("invoiceNumber").textContent =
            result.data[key].orderID;
          document.getElementById("invoiceDate").textContent =
            result.data[key].shipDate;

          //Order Information
          document.getElementById("po").textContent = result.data[key].poNumber;
          document.getElementById("salesOrder").textContent = "";
          document.getElementById("term").textContent =
            "Net " + term.toString();
          document.getElementById("shipDate").textContent =
            result.data[key].shipDate;
          document.getElementById("paymentDueDate").textContent = paymentDate;
          document.getElementById("rep").textContent =
            result.data[key].repFirstName + " " + result.data[key].repLastName;

          //Shipping
          document.getElementById("shippingAttention").textContent =
            result.data[key].shippingAttention;
          document.getElementById("shippingAddress").textContent =
            result.data[key].shippingAddress +
            " " +
            result.data[key].shippingAddress2;
          document.getElementById("shippingCityStateZipCode").textContent =
            result.data[key].shippingCity +
            ", " +
            result.data[key].shippingState +
            "  " +
            result.data[key].shippingZipCode;

          //Billing
          document.getElementById("billingAttention").textContent =
            result.data[key].billingAttention;
          document.getElementById("billingAddress").textContent =
            result.data[key].billingAddress +
            " " +
            result.data[key].billingAddress2;
          document.getElementById("billingCityStateZipCode").textContent =
            result.data[key].billingCity +
            ", " +
            result.data[key].billingState +
            "  " +
            result.data[key].billingZipCode;
        }
      }

      //Totals
      document.getElementById("productTotal").textContent = totalParts;
      document.getElementById("promotions").textContent = totalPromotion;
      document.getElementById("shippingTotal").textContent = totalShipping;
      document.getElementById("taxTotal").textContent = totalTax;

      //Grand Total
      var grandTotal = totalParts + totalPromotion + totalShipping + totalTax;
      document.getElementById("grandTotal").textContent = grandTotal;

      document.getElementById("invoiceAmountDue").textContent = totalParts;

      //Set Data
    });
  }, [orderID, shipDate]);

  return (
    <React.Fragment>
      <div id="PDFcontent">
        {" "}
        <br />
        <h1>Order ID: {orderID}</h1>
        <h1>Ship Date: {shipDate}</h1>
        <div id="header" className="clearfix">
          <div className="invoiceLeft">
            <img src={logo} width="80" height="60" alt="PLS Logo" />
            <br />
            <h7>PROLOOK SPORTS CORP.</h7>
            <br />
            <h7>PO Box 971180</h7>
            <br />
            <h7>1325 South 800 East #315</h7>
            <br />
            <h7>Orem, UT 84097</h7>
            <br />
          </div>
          <div className="invoiceRight">
            <h1>INVOICE</h1>
            <table>
              <tr>
                <th>
                  <span contenteditable>Invoice #</span>
                </th>
                <td>
                  <span id="invoiceNumber">101138</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span>Date</span>
                </th>
                <td>
                  <span id="invoiceDate">January 1, 2012</span>
                </td>
              </tr>
              <tr>
                <th>
                  <span>Amount Due</span>
                </th>
                <td>
                  <span id="invoiceAmountDue">$600.00</span>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <br />
        <div id="address" className="clearfix">
          <div id="addressShipping" className="invoiceLeft">
            <h5>SHIP TO</h5>
            <table>
              <tbody>
                <tr>
                  <td>
                    <span id="shippingAttention" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span id="shippingAddress" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span id="shippingCityStateZipCode" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="addressBilling" className="invoiceRight">
            <h5>BILL TO</h5>
            <table>
              <tbody>
                <tr>
                  <td>
                    <span id="billingAttention" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span id="billingAddress" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span id="billingCityStateZipCode" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
        <div id="orderInformation">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>PO #</th>
                <th>Sales Order #</th>
                <th>Terms</th>
                <th>Ship Date</th>
                <th>Payment Due Date</th>
                <th>Rep</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span id="po" />
                </td>
                <td>
                  <span id="salesOrder" />
                </td>
                <td>
                  <span id="term" />
                </td>
                <td>
                  <span id="shipDate" />
                </td>
                <td>
                  <span id="paymentDueDate" />
                </td>
                <td>
                  <span id="rep" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div id="orderParts">
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Part</th>
                <th>Item</th>
                <th>Description</th>
                <th>#</th>
                <th>Rate</th>
                <th align="right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {data.map((part, key) => (
                <tr>
                  <td>{part.orderID}</td>
                  <td>{part.partID}</td>
                  <td>{part.itemID}</td>
                  <td>{part.itemName}</td>
                  <td>{part.numberOfItems}</td>
                  <td>{part.priceDealer}</td>
                  <td align="right">{part.totalPriceDealer}</td>
                </tr>
              ))}

              <tr>
                <td colSpan="6" align="right" className="totalsHeader">
                  Product Total
                </td>
                <td align="right">
                  <span id="productTotal" />
                </td>
              </tr>
              <tr>
                <td colSpan="6" align="right" className="totalsHeader">
                  Promotions
                </td>
                <td align="right">
                  <span id="promotions" />
                </td>
              </tr>
              <tr>
                <td colSpan="6" align="right" className="totalsHeader">
                  Shipping
                </td>
                <td align="right">
                  <span id="shippingTotal" />
                </td>
              </tr>
              <tr>
                <td colSpan="6" align="right" className="totalsHeader">
                  Tax
                </td>
                <td align="right">
                  <span id="taxTotal" />
                </td>
              </tr>
              <tr>
                <td colSpan="6" align="right" className="totalsHeader">
                  Grand Total
                </td>
                <td align="right">
                  <span id="grandTotal" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Invoice;
