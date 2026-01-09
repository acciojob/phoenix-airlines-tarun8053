import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function FlightBooking() {
  const history = useHistory();
  const [error, setError] = useState("");

  const handleConfirm = () => {
    const inputs = document.querySelectorAll("input[type='text']");
    for (let input of inputs) {
      if (!input.value) {
        setError("Please fill all fields");
        return;
      }
    }
    history.push("/confirmation");
  };

  return (
    <div>
      <h2>Flight Booking</h2>

      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />

      {error && <p>{error}</p>}

      <button onClick={handleConfirm}>Confirm Booking</button>
    </div>
  );
}

export default FlightBooking;
