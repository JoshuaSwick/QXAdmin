import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import HomeMain from "./components/home/HomeMain";
import OrderMain from "./components/order/OrderMain";
import ReportMain from "./components/report/ReportMain";
import ReportOrdersShipped from "./components/report/ReportOrdersShipped";
import DealerMain from "./components/dealer/DealerMain";
import FinanceMain from "./components/finance/FinanceMain";
import Invoice from "./components/finance/invoice/Invoice";
import InvoiceProLook from "./components/finance/invoice/InvoiceProLook";
import DealerAddRep from "./components/dealer/DealerAddRep";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomeMain} />
        <Route exact path="/order" component={OrderMain} />

        <Route
          exact
          path="/reports/ordershipped"
          component={ReportOrdersShipped}
        />

        <Route exact path="/report" component={ReportMain} />
        <Route exact path="/dealer" component={DealerMain} />
        <Route exact path="/dealer/addrep" component={DealerAddRep} />
        <Route exact path="/finance" component={FinanceMain} />
        <Route
          exact
          path="/finance/invoiceprolook"
          component={InvoiceProLook}
        />
        <Route exact path="/finance/invoice" component={Invoice} />

        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
