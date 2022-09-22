import classes from "../../pages/notification/Notification.module.css";

import Today from "../../components/notification/Today";
import Tomorrow from "../../components/notification/Tomorrow";

// import { Link } from "react-router-dom";

export default function NotificationPage() {
  return (
    <div className={classes.box}>
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
            <Tomorrow />
          </div>
        </div>
      </p>
    </div>
  );
}
