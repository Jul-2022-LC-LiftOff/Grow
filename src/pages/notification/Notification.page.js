import classes from "../../pages/notification/Notification.module.css";

import Today from "../../components/notification/Today";
import Tomorrow from "../../components/notification/Tomorrow";
import WaterNavbar from "../../components/navbar/water-navbar";
import CurrentUser from "../../CurrentUser";

// import { Link } from "react-router-dom";

export default function NotificationPage() {
  return (
    <div className={classes.box}>
      <WaterNavbar />
      <p className={classes.header}>
        Water Schedule
        <div className={classes.notificationpage}>
          {/* <Header /> */}
          <div>
            <h1 className={classes.h1}>Today</h1>
            <Today />
          </div>
          <div>
            <h1 className={classes.h1}>Tomorrow</h1>
            {/* <Tomorrow /> */}
          </div>
          <div>{/* <CurrentUser /> */}</div>
        </div>
      </p>
    </div>
  );
}
