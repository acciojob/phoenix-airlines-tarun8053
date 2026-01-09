import React from "react";
import { useHistory } from "react-router-dom";

export default function Confirmation() {
  const history = useHistory();

  return (
    <div>
      <h2>Booking Confirmed</h2>

      <ul>
        <li>Thank you for booking with Phoenix Airlines</li>
      </ul>

      <button onClick={() => history.push("/")}>
        Go Home
      </button>
    </div>
  );
}
