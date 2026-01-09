import React from "react";
import { useHistory } from "react-router-dom";

export default function FlightBooking() {
  const history = useHistory();

  return (
    <div>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />

      <ul>
        <li>All fields are required</li>
      </ul>

      <button onClick={() => history.push("/confirmation")}>
        Confirm Booking
      </button>
    </div>
  );
}
