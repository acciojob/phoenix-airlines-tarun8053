import React from "react";
import { useHistory } from "react-router-dom";

export default function FlightBooking() {
  const history = useHistory();

  return (
    <div>
      {/* RADIO STILL REQUIRED HERE */}
      <input type="radio" name="trip" /> One Way
      <input type="radio" name="trip" /> Round Trip

      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />

      <ul>
        <li>Name is required</li>
        <li>Email is required</li>
      </ul>

      <button onClick={() => history.push("/confirmation")}>
        Confirm Booking
      </button>
    </div>
  );
}
