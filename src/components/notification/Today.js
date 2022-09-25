import React, { useEffect } from "react";
import { useState } from "react";
import {
  collection,
  getDocs,
  doc,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import PlantDataService from "../../services/PlantDataService";

import classes from "../../pages/notification/Notification.module.css";

export default function Today() {
  const [gardenData, setGardenData] = useState([]);

  const user = auth.currentUser;
  const userId = user.uid;
  const userEmail = user.email;

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
          const gardenQ = query(collection(db, `users/${elem.id}/Garden`));
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
      Logged in as
      <div>Email: {userEmail}</div>
      <div>ID: {userId}</div>
      <ul>
        {gardenData.map((elem) => {
          return (
            <li key={elem.uid}>
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
