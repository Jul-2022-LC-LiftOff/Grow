import React from "react";
import plantOne from "../assets/plantOne.jpg"
import ".//individual-style.css";

const IndividualPlant = (props)=> {
    return(
        <section>
        <div className="IndividualPlant text-center col-sm">
             <div className="overflow">
                <img src={plantOne} alt="Plant is still growing!" class="rounded" col-sm className="IndividualPlants-img-top"></img>
             </div>
             <div className="IndividualPlant-body text-dark">
                <h4 className="IndividualPlant-title text-left">James</h4>
                <div className="IndividualPlant-text text-secondary justify-content-left">
                    <p>Name: James The Plant</p>
                    <p>Familky: Plantius Leafius</p>
                    <p>Mature Size: Pretty big</p>
                    <p>Soil type: The brown kind</p>
                    <p>Sun Exposure: Would be nice</p>
                    <p>Hardiness: Kinda wimpy</p>
                    <p>Water: His favorite beverage</p>
                </div>
             </div>
        </div>
        </section>
           
    );
};
export default IndividualPlant;