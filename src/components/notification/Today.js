import React, { useEffect } from "react";
import { useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { UsingProps } from "./DisplayCard";

// import PlantDataService from "../../services/PlantDataService";

import classes from "../../pages/notification/Notification.module.css";

export const Today = (props) => {
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
    }
  }, [props.user]);

  console.log("userid: ", userId);

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
            where("waterDay", "array-contains", currentDay)
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
      {" "}
      <UsingProps gardenData={gardenData} />
    </div>
  );
};
