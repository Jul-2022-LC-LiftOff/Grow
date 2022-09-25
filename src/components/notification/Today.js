import React, { useEffect } from "react";
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
// import PlantDataService from "../../services/PlantDataService";

import classes from "../../pages/notification/Notification.module.css";

export default function Today() {
  const [gardenData, setGardenData] = useState([]);

  const user = auth.currentUser;
  // const userId = user.uid;
  const userEmail = user.email;

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

  const usersCollectionRef = collection(db, "users");

  useEffect(() => {
    if (user) {
      const getData = async () => {
        const q = query(usersCollectionRef);
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        data.map(async (elem) => {
          const gardenQ = query(
            collection(db, `users/${elem.id}/Garden`),
            where("waterDay", "array-contains", currentDay)
          );
          const gardenDetails = await getDocs(gardenQ);
          const GardenInfo = gardenDetails.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          // gardenDetails.forEach((doc) => {
          //   console.log(doc.id, " => ", doc.data());
          // });
          setGardenData(GardenInfo);
          // console.log(GardenInfo);
        });
      };
      getData();
    } else {
      console.log("No user defined");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
