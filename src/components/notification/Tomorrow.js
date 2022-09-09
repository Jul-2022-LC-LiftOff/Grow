import React, { useEffect } from "react";
import { useState } from "react";
import { collection, query, where } from "firebase/firestore";
import { db } from "../../firebase-config";
import { getDocs } from "firebase/firestore";
import classes from "../../pages/notification/Notification.module.css";

export default function Tomorrow() {
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
  let nextDay = weekday[showDate.getDay() + 1];

  const q = query(
    plantsCollectionRef,
    where("waterDay", "array-contains", nextDay)
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
                  <h5>Watering Day: {plant.waterDay + ""}</h5>
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
