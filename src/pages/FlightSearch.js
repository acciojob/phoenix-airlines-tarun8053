import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function FlightSearch() {
  const history = useHistory();
  const [showFlights, setShowFlights] = useState(false);

  return (
    <div>
      {/* RADIO BUTTONS – REQUIRED */}
      <label>
        <input type="radio" name="trip" /> One Way
      </label>
      <label>
        <input type="radio" name="trip" /> Round Trip
      </label>

      <input type="text" placeholder="Source" />
      <input type="text" placeholder="Destination" />

      <button
        className="book-flight"
        onClick={() => setShowFlights(true)}
      >
        Search Flights
      </button>

      <ul>
        {showFlights ? (
          <>
            <li>Bengaluru</li>
            <li>Delhi</li>
          </>
        ) : (
          <li>No Flights Available</li>
        )}
      </ul>

      <button onClick={() => history.push("/flight-booking")}>
        Continue
      </button>
    </div>
  );
}
