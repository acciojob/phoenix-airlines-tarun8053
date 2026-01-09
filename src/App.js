import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import FlightSearch from "./pages/FlightSearch";
import FlightBooking from "./pages/FlightBooking";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/flight-search" component={FlightSearch} />
      <Route path="/flight-booking" component={FlightBooking} />
      <Route path="/confirmation" component={Confirmation} />
    </Switch>
  );
}

export default App;
