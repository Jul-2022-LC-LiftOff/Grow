import React, { useEffect } from "react";
import ReactAvatarEditor from "react-avatar-editor";

import { useState, useRef } from "react";







const UploadImage = ({handleNewImage, plantImg}) => {
const [imageUrl, setImageUrl] = useState("");
const [width, setWidth] = useState(330);
const [height, setHeight] = useState(330);
const [image, setImage] = useState('');
const [zoomOut, setZoomOut] = useState(false);
const [scale, setScale] = useState(1);
const [rotate, setRotate] = useState(0);
const [preview, setPreview] = useState(null);
const [borderRadius, setBorderRadius] = useState(50);
const [position, setPosition] = useState({ x: 0.5, y: 0.5 });
const [per, setPerc] = useState(null);

const handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    setScale(scale);
};



const handlePositionChange = (position) =>{
    setPosition({position});
}

const setEditorRef = useRef(null);


    return(
        <div>
            <div>
                <ReactAvatarEditor
                ref={setEditorRef}
                scale = {parseFloat(scale
                    
                    
                    
                    )}
                width = {height}
                height = {width}
                // position = {position}
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
                accept="image/*" 
                // onChange={handleImage}
                multiple ={false}
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
            />
            {/* <button onClick={handleNewImage}> Upload Image</button> 
this button isnt actually submitting hte image that we want  */}
        </div>
    )
}

export default UploadImage;