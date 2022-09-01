import React, { useEffect } from "react";
import { useState } from "react";

import { db } from "../../firebase-config";
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

  // const TodaySchedule = () => {
  //   let showDate = new Date();
  //   let diaplayTodaysDate = showDate.toDateString();
  //   let day = showDate.getDay().toString();
  //   let displayTime = showDate.getHours() + ":" + showDate.getMinutes();

  //   return (
  //     <div>
  //       <center>
  //         <h3>Date: {diaplayTodaysDate}</h3>
  //         <h3>Day: {day}</h3>
  //         <h3>Time: {displayTime}</h3>
  //       </center>
  //     </div>
  //   );
  // };

  function Today(plant) {
    let showDate = new Date();
    let currentDay = showDate.getDay();
    console.log(DateFormat("EEEE").format(date));
    let filter = plant.filter((dataInfo) => {
      let day = new Date(dataInfo.waterDay).getDay();
      console.log(day);
      console.log(currentDay);
      console.log(dataInfo.waterDay);
      return currentDay === day;
    });
    return filter;
  }

  function iterate(dataInfo) {
    if (!dataInfo) return;

    return (
      <>
        {dataInfo.map((plant, index) => {
          return (
            <li key={index}>
              <div className="card-notify">
                <h3>Name: {plant.name}</h3>
                <h3>Name: {plant.waterDay}</h3>
                <h5>Water: {plant.waterTime}</h5>
              </div>
            </li>
          );
        })}
      </>
    );
  }

  return (
    <div>
      <ul className="item">
        {iterate(plants)}
        <div> {Today(plants)}</div>
        {/* {plants.map((plant) => {
          return (
            <div className="card-notify">
              <h3>Name: {plant.name}</h3>
              <h3>Name: {plant.waterDay}</h3>
              <h5>Water: {plant.waterTime}</h5>
            </div>
          );
        })} */}
      </ul>
    </div>
  );
}
