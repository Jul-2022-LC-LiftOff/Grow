import React, { useEffect } from "react";
import { useState } from "react";

import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

export default function Notification() {
  const [plants, setPlants] = useState([]);
  const plantsCollectionRef = collection(db, "plants");

  useEffect(() => {
    const getPlants = async () => {
      const data = await getDocs(plantsCollectionRef);
      setPlants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPlants();
  }, []);

  const TodaySchedule = () => {
    let showDate = new Date();
    let diaplayTodaysDate = showDate.toDateString();
    let displayTime = showDate.getHours() + ":" + showDate.getMinutes();

    return (
      <div>
        <center>
          <h3>Date: {diaplayTodaysDate}</h3>
          <h3>Time: {displayTime}</h3>
        </center>
      </div>
    );
  };

  return (
    <div>
      <TodaySchedule />

      <ul className="item">
        {plants.map((plant) => {
          return (
            <div className="card-notify">
              <h3>Name: {plant.name}</h3>
              <h3>Name: {plant.waterDay}</h3>
              <h5>Water: {plant.waterTime}</h5>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
