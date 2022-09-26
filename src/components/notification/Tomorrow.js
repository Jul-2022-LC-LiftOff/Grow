import React, { useEffect } from "react";
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
// import PlantDataService from "../../services/PlantDataService";

import classes from "../../pages/notification/Notification.module.css";

export default function Today(props) {
  const [gardenData, setGardenData] = useState([]);

  // const user = auth.currentUser;
  // const userId1 = user.uid;
  // const userEmail = user.email;

  let [userEmail, setUserEmail] = useState("");
  let [userId, setUserId] = useState("");
  let [user, setUser] = useState("");

  useEffect(() => {
    if (props.user) {
      setUserEmail(props.user.email);
      setUserId(props.user.uid);
      setUser(props.user);
      console.log("userid: ", userId);
    }
  }, [props.user]);

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
  let nextDay = weekday[showDate.getDay() + 1];

  useEffect(() => {
    if (!user) {
      console.log("No user defined");
    } else {
      const getData = async () => {
        const q = query(collection(db, "users"));
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        data.map(async (elem) => {
          const gardenQ = query(
            collection(db, `users/${userId}/Garden`),
            where("waterDay", "array-contains", nextDay)
          );
          const gardenDetails = await getDocs(gardenQ);
          const GardenInfo = gardenDetails.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setGardenData(GardenInfo);
        });
      };
      getData();
    }
  }, [user]);

  return (
    <div>
      <ul>
        {gardenData.map((elem) => {
          return (
            <li key={elem.userId}>
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
