import React from "react";
import { useHistory } from "react-router-dom";

function FlightSearch() {
  const history = useHistory();

  return (
    <div>
      <h2>Flight Search</h2>

      <input type="text" placeholder="Source" />
      <input type="text" placeholder="Destination" />
      <input type="date" />

      <div>
        <label>
          <input type="radio" name="trip" /> One Way
        </label>
        <label>
          <input type="radio" name="trip" /> Round Trip
        </label>
      </div>

      <button
        className="book-flight"
        onClick={() => history.push("/flight-booking")}
      >
        Book
      </button>
    </div>
  );
}

export default FlightSearch;
