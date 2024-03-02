import React from "react";
import "./second.css";

function Secondsection() {
  return (
    <div className="section-two">
      <div className="secondsec-text-side">
        <div className="sectwo-color-text">
          <p>About Me</p>
        </div>
        <h1>
          Welcome to the Official Website of <span>Angel Cisneros</span>
        </h1>
        <p>
          In the dynamic realms of technology and investment, few names resonate
          as profoundly as Angel Cisneros. With a storied career spanning over
          two decades, Angel has cemented his legacy as a visionary tech
          entrepreneur, discerning angel investor, and dedicated mentor. His
          journey is a testament to the power of innovation, leadership, and
          strategic foresight in the tech and telecom industries.
        </p>
        <div className="firstsec-buttons">
          <button>Contact Now</button>
        </div>
      </div>
      <div className="secondsec-image-side">
        <img src="/Images/223.png" alt="" />
      </div>
    </div>
  );
}

export default Secondsection;
