import React from "react";
import ReactAvatarEditor from "react-avatar-editor";
import plantThree from "../assets/plantThree.jpg";
import { storage } from "../firebase-config";
import {ref, uploadBytes} from 'firebase/storage';
import { v4 } from "uuid";
class UploadImage extends React.Component {
constructor(props){
    super(props);
    this.state={
        image:"",
        allowZoomOut: false,
        scale: 1,
        rotate: 0,
        preview: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleNewImage = (e) => {
    this.setState({image: e.target.files[0]});
}

handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    this.setState({scale});
};
handlePositionChange = (position) => {
    this.setState({position})
};
setEditorRef = (editor) => (this.editor = editor);

async handleSubmit(e){
    if(this.editor){
        const img = this.editor.getImageScaledToCanvas().toDataURL();
    }
}
render(){
    const imageRef = ref(storage, 'images/${imageUpload.name + v4()}')
    return(
        <div>
            <div>
                <ReactAvatarEditor
                ref={this.setEditorRef}
                scale = {parseFloat(this.state.scale)}
                width = {this.state.width}
                height = {this.state.height}
                position = {this.state.position}
                onPositionChange={this.handlePositionChange}
                rotate={parseFloat(this.state.rotate)}
                image = {this.state.image}
                className = "editor-canvas"
                />
            </div>
            <br/>
            <label >
                <input
                name="upload-img-input"
                type="file"
                onChange = {this.handleNewImage}
                />
                
            </label>
            <br/>
            
            <input
                name="scale"
                type="range"
                onChange={this.handleScale}
                min={this.state.allowZoomOut ? "0.1" : "1"}
                max="2"
                step="0.01"
                defaultValue="1"
                placeholder={plantThree}
            />
            
        </div>
    )
}
}
export default UploadImage;