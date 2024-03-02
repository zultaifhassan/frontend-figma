import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <div className="Section-one">
      <div className="navbar-section">
        <div className="logo-side">
          <h1>
            Angel <span>Cisneros</span>
          </h1>
        </div>
        <div className="socialicon-side">
          <img src="/Images/Group 85.png" alt="" />
          <img src="/Images/Vector.png" alt="" />
          <img src="/Images/Group 2019.png" alt="" />
          <img src="/Images/Group 88.png" alt="" />
        </div>
      </div>
      <div className="main-image-text">
        <div className="main-image">
          <img src="/Images/man.png" alt="" />
        </div>
        <div className="text-side">
          <div className="back-color-text">
            <p>Angel Cisneros</p>
          </div>
          <h1>
            Visionary Tech <span>Entrepreneur</span> and Angel Investor
          </h1>
          <p>
            Meet Angel Cisneros, a pioneering tech entrepreneur, investor, and
            mentor with over two decades of experience leading successful tech
            startups to global acclaim and lucrative exits.
          </p>
          <div className="firstsec-buttons">
            <button>Learn more</button>
            <button>Contact Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
