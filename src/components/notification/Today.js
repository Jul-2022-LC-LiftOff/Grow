import React, { useEffect } from "react";
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
// import PlantDataService from "../../services/PlantDataService";

import classes from "../../pages/notification/Notification.module.css";

export default function Today(props) {
  const [gardenData, setGardenData] = useState([]);

  // const user = auth.currentUser;
  // const userId = user.uid;
  // const userEmail = user.email;

  let [userEmail, setUserEmail] = useState("");
  let [userId, setUserId] = useState("");
  let [user, setUser] = useState("");

  useEffect(() => {
    if (props.user) {
      setUserEmail(props.user.email);
      setUserId(props.user.uid);
      setUser(props.user);
    }
  }, [props.user]);

  const plantsCollectionRef = collection(db, "users", userId, "Garden");
  // const plantsCollectionRef1 = collection(db, "Garden");
  console.log(plantsCollectionRef);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let showDate = new Date();
  let currentDay = weekday[showDate.getDay()];

  const q = query(
    plantsCollectionRef,
    where("waterDay", "array-contains", currentDay)
  );

  const getPlants = async () => {
    const data = await getDocs(q);

    // data.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
    setGardenData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPlants();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ul>
        {gardenData.map((elem) => {
          return (
            <li key={elem.id}>
              <div className={classes.flex}>
                <img src={elem.image} alt="img" />
                <div>
                  <h3>{elem.name}</h3>
                  {/* <h5>Watering Day: {elem.waterDay + ""} </h5> */}
                  <h5>Water: {elem.waterTime}</h5>
                </div>
                {/* <input type="checkbox" checked={checked} /> */}
                {/* <button
                  onClick={() => {
                    setChecked((old) => !old);
                  }}
                  className={classes.button}
                >
                  {" "}
                  {checked ? "Undo" : "Water"}{" "}
                </button> */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
