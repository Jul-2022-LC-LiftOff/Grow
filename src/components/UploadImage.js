import React from "react";
import ReactAvatarEditor from "react-avatar-editor";
import plantThree from "../assets/plantThree.jpg";
import { storage } from "../firebase-config";
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import { v4 } from "uuid";
import { useState, useRef } from "react";
import { uploadBytesResumable} from 'firebase/storage';






const UploadImage = () => {

const [image, setImage] = useState('');
const [zoomOut, setZoomOut] = useState(false);
const [scale, setScale] = useState(1);
const [rotate, setRotate] = useState(0);
const [preview, setPreview] = useState(null);
const [position, setPosition] = useState({ x: 0.5, y: 0.5 });

// const handleNewImage = (e) => {
//     setImage(e.target.files[0]);
// };

const handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    setScale(scale);
};

const handleNewImage = (e) => {
    setImage(e.target.files[0]);
    };

const handlePositionChange = (position) =>{
    setPosition({position});
}
// const handlePositionChange = (position) => {
//     setPosition(position);
// };
const setEditorRef = useRef();

const handleUpload = () =>{
    if(!image){
        alert("Please upload an image first!");
    }
    const imageRef = ref(storage, 'files/${image.name}');
    const uploadTask = uploadBytesResumable(imageRef, image );
    getDownloadURL(uploadTask.snapshot.ref);
}


 //const imageRef = ref(storage, 'images/${imageUpload.name + v4()}')
    return(
        <div>
            <div>
                <ReactAvatarEditor
                ref={setEditorRef}
                scale = {parseFloat(scale)}
                // width = {width}
                // height = {this.state.height}
                position = {position}
                onPositionChange={handlePositionChange}
                rotate={parseFloat(rotate)}
                image = {image}
                className = "editor-canvas"
                />
            </div>
            <br/>
            <label >
                <input
                name="upload-img-input"
                type="file"
                onChange = {handleNewImage}
                />
                
            </label>
            <br/>
            
            <input
                name="scale"
                type="range"
                onChange={handleScale}
                min={zoomOut ? "0.1" : "1"}
                max="2"
                step="0.01"
                defaultValue="1"
                //placeholder={plantThree}
            />
            <button onClick={handleUpload}> Upload Image</button>

        </div>
    )
}

export default UploadImage;