import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import FlightSearch from "./pages/FlightSearch";
import FlightBooking from "./pages/FlightBooking";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/flight-search" component={FlightSearch} />
        <Route path="/flight-booking" component={FlightBooking} />
        <Route path="/confirmation" component={Confirmation} />
      </Switch>
    </HashRouter>
  );
}

export default App;
