import React,{Component} from "react";
import IndividualPlant from "./IndividualPlant";
//import ".//individual-style.css";
class IndividualPlants extends Component{

    render(){
        return(
            <div className="container-fluid d-flex justify-content-center ">
                <div className="row">
                    <div className="col-md-4">
                        <IndividualPlant/>
                    </div>
                    <div className="col-md-4">
                    <IndividualPlant/>
                    </div>
                    <div className="col-md-4">
                    <IndividualPlant/>
                    </div>
                </div>
            </div>
        );
    }
}
export default IndividualPlants;