import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import HomeMain from "./components/home/HomeMain";
import OrderMain from "./components/order/OrderMain";
import ReportMain from "./components/report/ReportMain";
import ReportOrdersShipped from "./components/report/ReportOrdersShipped";
import DealerMain from "./components/dealer/DealerMain";
import DealerAddRep from "./components/dealer/DealerAddRep";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomeMain} />
        <Route path="/order" component={OrderMain} />

        <Route path="/reports/ordershipped" component={ReportOrdersShipped} />

        <Route path="/report" component={ReportMain} />
        <Route path="/dealer" component={DealerMain} />
        <Route path="/dealer/addrep" component={DealerAddRep} />

        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
