import classes from "../../pages/notification/Notification.module.css";
import { useEffect } from "react";
import Today from "../../components/notification/Today";
import Tomorrow from "../../components/notification/Tomorrow";
import WaterNavbar from "../../components/navbar/water-navbar";
import CurrentUser from "../../CurrentUser";

export default function NotificationPage(props) {
  return (
    <div className={classes.box}>
      <WaterNavbar />
      <p className={classes.header}>
        Water Schedule
        <div className={classes.notificationpage}>
          <div className={classes.user}>
            <CurrentUser user={props.user} />
          </div>{" "}
          <div>
            <h1 className={classes.h1}>Today</h1>
            <Today user={props.user} />
          </div>
          <div>
            <h1 className={classes.h1}>Tomorrow</h1>
            {/* <Tomorrow user={props.user}/> */}
          </div>
        </div>
      </p>
    </div>
  );
}
