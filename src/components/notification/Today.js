import React, { useEffect } from "react";
import { useState } from "react";
import {
  collection,
  orderBy,
  query,
  Query,
  where,
  limit,
} from "firebase/firestore";
import { db } from "../../firebase-config";
import { getDocs } from "firebase/firestore";

import classes from "../../pages/notification/Notification.module.css";

export default function Today() {
  const [plants, setPlants] = useState([]);
  const [checked, setChecked] = React.useState(false);

  const plantsCollectionRef = collection(db, "plants");

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
  // let waterDayInt = parseInt(plants.waterDay);

  // const waterDayConvert = [showDate.getTime()];
  // console.log(showDate.getHours() + ":" + showDate.getMinutes());

  const q = query(
    plantsCollectionRef,
    where("waterDay", "array-contains", currentDay)
    // orderBy("name", "array-contains", "desc")
  );

  const getPlants = async () => {
    const data = await getDocs(q);

    // data.forEach((doc) => {
    //   // doc.data() is never undefined for query doc snapshots
    //   console.log(doc.id, " => ", doc.data());
    // });
    setPlants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getPlants();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ul>
        {plants.map((plant, index) => {
          return (
            <li key={index}>
              <div className={classes.flex}>
                <img src={plant.image} alt="img" />
                <div>
                  <h3>{plant.name}</h3>
                  {/* <h5>Watering Day: {plant.waterDay + ""} </h5> */}
                  <h5>Water: {plant.waterTime}</h5>
                </div>
                {/* <input type="checkbox" checked={checked} /> */}
                <button
                  onClick={() => {
                    setChecked((old) => !old);
                  }}
                  className={classes.button}
                >
                  {" "}
                  {checked ? "Undo" : "Water"}{" "}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
