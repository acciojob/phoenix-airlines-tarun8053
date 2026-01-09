import React from "react";
import { useHistory } from "react-router-dom";

function Confirmation() {
  const history = useHistory();

  return (
    <div>
      <h2>Booking Confirmed</h2>
      <button onClick={() => history.push("/")}>Go Home</button>
    </div>
  );
}

export default Confirmation;
