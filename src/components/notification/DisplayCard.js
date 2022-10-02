import React from "react";
import classes from "../../pages/notification/Notification.module.css";

export const UsingProps = ({ gardenData }) => {
  return (
    <div>
      {" "}
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
};
