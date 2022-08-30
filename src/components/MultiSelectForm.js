import React, {Component} from "react";
import Select from "react-select";

const dayOptions=[
    {value:'Sunday', label: 'Sunday'},
    {value:'Monday', label: 'Monday'},
    {value:'Tuesday', label: 'Tuesday'},
    {value:'Wednesday', label: 'Wednesday'},
    {value:'Thursday', label: 'Thursday'},
    {value:'Friday', label: 'Friday'},
    {value:'Saturday', label: 'Saturday'},
]
class MultiSelectForm extends Component {
render(){
    return(
        <div>
            <Select
            options={dayOptions}
    
            isMulti/>
        </div>
    )
}

}
export default MultiSelectForm;