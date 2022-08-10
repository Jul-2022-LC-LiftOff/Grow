
import React,{Component} from "react";
import IndividualPlant from "./IndividualPlant";
import ".//individual-style.css";
class IndividualPlants extends Component{

    render(){
        return(
            // <div className="IndividualPlant container-fluid d-flex  justify-content-center">
            //     <div className="row">  
               
                <IndividualPlant/>
                   
                 
            // </div>
        );
    }
}
export default IndividualPlants;