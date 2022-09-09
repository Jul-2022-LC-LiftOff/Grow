import classes from "../../pages/notification/Notification.module.css";

import Today from "../../components/notification/Today";
import Tomorrow from "../../components/notification/Tomorrow";

// import { Link } from "react-router-dom";

export default function NotificationPage() {
  // const Header = () => (
  //   <header>
  //     <div className="header">
  //       <div className="logo">Water Schedule</div>
  //       <nav>
  //         <ul>
  //           <li>
  //             <Link to="/notify">Today</Link>
  //           </li>
  //           <li>
  //             <Link to="/forgotton">Forgotton</Link>
  //           </li>
  //           <li>
  //             <Link to="/tomorrow">Tomorrow</Link>
  //           </li>
  //         </ul>
  //       </nav>
  //     </div>
  //   </header>
  // );

  return (
    <div className={classes.box}>
      {" "}
      <p className={classes.header}>Water Schedule</p>
      <div className={classes.notificationpage}>
        {/* <Header /> */}
        <div>
          <div>
            <h1 className={classes.h1}>Today</h1>
            <Today />
          </div>
          <div>
            <h1 className={classes.h1}>Tomorrow</h1>
            <Tomorrow />
          </div>
        </div>
      </div>
    </div>
  );
}
