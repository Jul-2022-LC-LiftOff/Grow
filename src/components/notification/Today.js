import React, { useEffect } from "react";
import { useState } from "react";
import { collection, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";
import { getDocs } from "firebase/firestore";
import classes from "../../pages/notification/Notification.module.css";

export default function Today() {
  const [plants, setPlants] = useState([]);
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

  const q = query(
    plantsCollectionRef,
    where("waterDay", "array-contains", currentDay)
    // orderBy("waterTime", "asc")
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
      <ul className="item">
        {plants.map((plant, index) => {
          return (
            <li key={index}>
              <div className={classes.flex}>
                <img src={plant.image} alt="img" />
                <div>
                  <h3>Name: {plant.name}</h3>
                  {/* <h5>Watering Day: {plant.waterDay + ""} </h5> */}
                  <h5>Watering Time: {plant.waterTime}</h5>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
