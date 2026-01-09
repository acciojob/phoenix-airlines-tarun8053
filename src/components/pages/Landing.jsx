import React from "react";
import { useHistory } from "react-router-dom";

function Landing() {
  const history = useHistory();

  return (
    <div>
      <h1>Phoenix Airlines</h1>
      <button onClick={() => history.push("/flight-search")}>
        Book Flight
      </button>
    </div>
  );
}

export default Landing;
