import React, { useEffect } from "react";
import ReactAvatarEditor from "react-avatar-editor";
import plantThree from "../assets/plantThree.jpg";
import { storage } from "../firebase-config";
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import { v4 } from "uuid";
import { useState, useRef } from "react";
import { uploadBytesResumable} from 'firebase/storage';
import { setPersistence } from "firebase/auth";






const UploadImage = ({handleNewImage}) => {
const [imageUrl, setImageUrl] = useState("");
const [image, setImage] = useState('');
const [zoomOut, setZoomOut] = useState(false);
const [scale, setScale] = useState(1);
const [rotate, setRotate] = useState(0);
const [preview, setPreview] = useState(null);
const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
const [per, setPerc] = useState(null);
// const handleNewImage = (e) => {
//     setImage(e.target.files[0]);
// };

const handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    setScale(scale);
};

// const handleNewImage = (e) => {
//     setImage(e.target.files[0]);
//     };

const handlePositionChange = (position) =>{
    setPosition({position});
}
// const handlePositionChange = (position) => {
//     setPosition(position);
// };
const setEditorRef = useRef();

useEffect(()=>{
const handleUpload = () =>{
    
    const name = new Date().getTime() + image.name;
    const imageRef = ref(storage, `files/${name}`);
    const uploadTask = uploadBytesResumable(imageRef, image);
    uploadTask.on(
        "state_changed",
        (snapshot)=>{
            const progress = 
            (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
            setPerc(progress);
            switch(snapshot.state){
                case "paused":
                console.log("Upload is paused");
                    break;
                case "running":
                console.log("Upload is running");
                    break;
                default:
                    break;
            }
        },
        (error)=>{
            console.log(error);
        },
        ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
                setImageUrl((prev)=>[...prev, url]);
            }) ;
        }
        
    );
    
};
image && handleUpload();
},[image]);



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
            
            {/* <input
                name="scale"
                type="range"
                onChange={handleScale}
                min={zoomOut ? "0.1" : "1"}
                max="2"
                step="0.01"
                defaultValue="1"
                //placeholder={plantThree}
            />
            <button onClick={(e)=> setImage(e.target.files[0])}> Upload Image</button> */}

        </div>
    )
}

export default UploadImage;