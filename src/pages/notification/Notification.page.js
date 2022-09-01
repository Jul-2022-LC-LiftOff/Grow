import React from "react";
import "../../pages/notification/Notification.style.css";

import Notification from "../../components/notification/Notification.comp";

// import { Link } from "react-router-dom";

export default function NotificationPage() {
  const Header = () => (
    <header>
      <div className="header">
        <div className="logo">Water Schedule</div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/notify">Today</Link>
            </li>
            <li>
              <Link to="/forgotton">Forgotton</Link>
            </li>
            <li>
              <Link to="/upcoming">Upcoming</Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );

  return (
    <div>
      <Header />
      <Notification />
    </div>
  );
}
