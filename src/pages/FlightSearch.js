import React from "react";
import { useHistory } from "react-router-dom";

export default function FlightSearch() {
  const history = useHistory();

  return (
    <div>
      <select>
        <option>One Way</option>
        <option>Round Trip</option>
      </select>

      <input type="text" placeholder="Source" />
      <input type="text" placeholder="Destination" />

      <button
        className="book-flight"
        onClick={() => history.push("/flight-booking")}
      >
        Book Flight
      </button>

      <ul>
        <li>Flight Available</li>
      </ul>
    </div>
  );
}
