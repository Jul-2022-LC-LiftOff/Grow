import React, { useState, useEffect, useRef } from "react";
import { Alert, Button } from "react-bootstrap";
import PlantDataService from "../services/PlantDataService";
import { Card } from "react-bootstrap";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";
import { storage } from "../firebase-config";

import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config";


import {
  deleteObject,
  getDownloadURL,
  getMetadata,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import ReactAvatarEditor from "react-avatar-editor";
import Select from "react-select";
import { getAuth } from "firebase/auth";
import classes from "./AddPlantStyle.module.css";
export var successAdd = false;
export var successEdit = false;




const AddPlant = ({
  id,
  setPlantId,
  closeAddModal,
  closeModal,
  userId,
  updateTrigger,
  updateVal,
}) => {
  //userId
  //let user = userId;
  // const auth =getAuth();
  // const user = auth.currentUser;
  // const userId = user.uid;

  const [name, setPlantName] = useState("");
  const [title, setPlantTitle] = useState("");
  const [soil, setPlantSoil] = useState("");
  const [size, setPlantSize] = useState("");
  const [sun, setPlantSun] = useState("");
  const [hardiness, setPlantHardiness] = useState("");
  const [water, setPlantWater] = useState("");
  const [waterTime, setPlantWaterTime] = useState("");
  const [waterDay, setPlantWaterDay] = useState([]);
  const [family, setPlantFamily] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [apiPlants, setApiPlants] = useState([]);
  const [per, setPerc] = useState(0);
  const [showProgBar, setShowProgBar] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [message, setMessage] = useState({ error: false, msg: "" });
  const [disableSelection, setDisableSelection] = useState(false);
  const [maxDays, setMaxDays] = useState(7);

  useEffect(() => {
    // console.log(userId);
    // console.log(updateTrigger)
  }, [userId]);

  const limitSelections = () => {
    if (water === "Never" || water === "Daily") {
      return true;
    } else if (waterDay.length >= maxDays) {
      return true;
    } else {
      return false;
    }
  };
  const limitSelect = limitSelections();
  let dayOptions = [
    {
      value: "Sunday",
      label: "Sunday",
      ...(limitSelect && { disabled: true }),
    },
    {
      value: "Monday",
      label: "Monday",
      ...(limitSelect && { disabled: true }),
    },
    {
      value: "Tuesday",
      label: "Tuesday",
      ...(limitSelect && { disabled: true }),
    },
    {
      value: "Wednesday",
      label: "Wednesday",
      ...(limitSelect && { disabled: true }),
    },
    {
      value: "Thursday",
      label: "Thursday",
      ...(limitSelect && { disabled: true }),
    },
    {
      value: "Friday",
      label: "Friday",
      ...(limitSelect && { disabled: true }),
    },
    {
      value: "Saturday",
      label: "Saturday",
      ...(limitSelect && { disabled: true }),
    },
  ];
  const handleDisableWater = () => {
    if (water === "3-5 times per week") {
      setMaxDays(5);
    } else if (water === "1-2 times per week") {
      setMaxDays(2);
    } else if (water === "2 times per month") {
      setMaxDays(2);
    } else if (water === "1 time per month") {
      setMaxDays(1);
    } else if (water === "Never") {
      setMaxDays(0);
    } else {
      setMaxDays(7);
    }
  };

  

  const handleWaterDay = (e) => {
    setPlantWaterDay(Array.isArray(e) ? e.map((x) => x.value) : []);
    handleDisableWater();
  };

  const handleImagePreview = (e) => {
    setImagePreview(e.target.files[0]);
  };

  const setEditorRef = useRef(null);






  // this is for adding plantCount;
  const addCount = async () => {
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap) {
        let plantNum = userSnap.data().plantCount;
        setDoc(userRef, {plantCount: plantNum + 1}, {merge: true});
    }
    
  }





  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    updateTrigger(updateVal + 1);

    if (name === "" || title === "" || water === "" || waterTime === "") {
      setMessage({ error: true, msg: "All fields are required!" });
      e.preventDefault();

      return;
    }

    const newPlant = {
      name,
      title,
      soil,
      size,
      sun,
      hardiness,
      water,
      waterTime,
      waterDay,
      family,
      image,
    };

    try {
      if (id !== undefined && id !== "") {
        await PlantDataService.updatePlant(id, newPlant, userId);
        setPlantId("");
        // console.log(image);
        successEdit=true;
        closeModal();
        if (
          oldImage !== image &&
          oldImage !== undefined &&
          image !== undefined
        ) {
          const imageUrl = ref(storage, oldImage);
          getMetadata(imageUrl)
            .then((metadata) => {
              const storageRef = ref(storage, `files/${imageUrl.name}`);

              deleteObject(storageRef)
                .then(() => {
                  console.log("IMAGE DELETED");
                })
                .catch((error) => {
                  console.log(error);
                });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } else {
        await PlantDataService.addPlants(newPlant, userId);

      
        // update plantCount field on user
        addCount(userId);


        successAdd = true;
        closeAddModal();
      }
    } catch (err) {
      setMessage({ error: true, msg: "Error!" });
      console.log(err);
      if (id !== undefined && id !== "") {
        closeModal();
      } else {
        closeAddModal();
      }
      return;
    }

    setPlantName("");
    setPlantTitle("");
    setPlantSoil("");
    setPlantSize("");
    setPlantSun("");
    setPlantHardiness("");
    setPlantFamily("");
    setPlantWater("");
    setPlantWaterTime("");
    setPlantWaterDay([]);
    setImage("");
    // console.log(newPlant);
    if (id !== undefined && id !== "") {
      successEdit = true;
    } else {
      //setSuccessAdd(true);
      successAdd = true;
    }
  };
  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await PlantDataService.getPlant(id, userId);
      setPlantName(docSnap.data().name);
      setPlantTitle(docSnap.data().title);
      setPlantSoil(docSnap.data().soil);
      setPlantSize(docSnap.data().size);
      setPlantSun(docSnap.data().sun);
      setPlantHardiness(docSnap.data().hardiness);
      setPlantFamily(docSnap.data().family);
      setPlantWater(docSnap.data().water);
      setPlantWaterTime(docSnap.data().waterTime);
      setPlantWaterDay(docSnap.data().waterDay);

      setImage(docSnap.data().image);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  const handleImage = (e) => {
    setFile(imagePreview);
  };

  useEffect(() => {
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  const oldImage = usePrevious(image);
  const plantRef = async () => await PlantDataService.getPlant(id, userId);
  const oldPlant = usePrevious(plantRef);

  useEffect(() => {
    const handleUpload = () => {
      const name = new Date().getTime() + file.name;
      const imageRef = ref(storage, `files/${name}`);

      const uploadTask = uploadBytesResumable(imageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setUploaded(true);
          setShowProgBar(true);
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          if (per === 100) {
            showProgBar(false);
          }
          switch (snapshot.state) {
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
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setUploaded(false);
            setShowProgBar(false);
            setImage(url);
          });
        }
      );
    };
    file && handleUpload();
  }, [file]);

  return (
    <>
      {message?.msg && (
        <Alert
          variant={message?.error ? "danger" : "success"}
          dismissible
          onClose={() => setMessage("")}
        >
          {message?.msg}
        </Alert>
      )}

      <section>
        <div>
          <Card className="IndividualPlantModal" id="addModal">
            <div className="uploadImage ">
              <div>
                <div>
                  <ReactAvatarEditor
                    ref={setEditorRef}
                    // scale = {parseFloat(scale)}
                    // width = {height}
                    // height = {width}
                    // // position = {position}
                    // onPositionChange={handlePositionChange}
                    // rotate={parseFloat(rotate)}
                    image={
                      image !== undefined && image !== "" ? image : imagePreview
                    }
                    alt={image}
                    className="editor-canvas"
                  />
                </div>
                <br />
                <label>
                  <input
                    name="upload-img-input"
                    type="file"
                    accept="image/*"
                    onChange={handleImagePreview}
                    multiple={false}
                  />
                </label>
                <br />

                <input
                  name="scale"
                  type="range"
                  // onChange={handleScale}
                  // min={zoomOut ? "0.1" : "1"}
                  max="2"
                  step="0.01"
                  defaultValue="1"
                />
                <button onClick={handleImage}> Upload Image</button>
              </div>

              {showProgBar && (
                <ProgressBar
                  className="progress__bar"
                  now={per}
                  size="medium"
                  inverted
                />
              )}
            </div>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <span style={{ fontWeight: "bold" }}> Title:</span>
                  <div>
                    <input
                      className={classes.editAdd}
                      type="text"
                      onChange={(event) => setPlantTitle(event.target.value)}
                      value={title}
                      required
                    ></input>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <span style={{ fontWeight: "bold" }}> Name:</span>
                  <div>
                    <input
                      className={classes.editAdd}
                      type="text"
                      onChange={(event) => setPlantName(event.target.value)}
                      value={name}
                      required
                    ></input>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <span style={{ fontWeight: "bold" }}>Family:</span>
                  <div>
                    <input
                      className={classes.editAdd}
                      type="text"
                      onChange={(event) => setPlantFamily(event.target.value)}
                      value={family}
                      required
                    ></input>
                  </div>
                </ListGroupItem>

                <ListGroupItem>
                  <span style={{ fontWeight: "bold" }}>Size:</span>
                  <div>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(event) => setPlantSize(event.target.value)}
                      value={size}
                      required
                    >
                      <option value=""></option>
                      <option value="1-3 inches">1-5 inches</option>
                      <option value="4-7 inches">4-7 inches</option>
                      <option value="8-12 inches">8-11 inches</option>
                      <option value="1-1.5 feet">1-1.5 feet</option>
                      <option value="1.5-2 feet">1.5-2 feet</option>
                      <option value="2-2.5 feet">2-2.5 feet</option>
                      <option value="2.5-3 feet">2.5-3 feet</option>
                      <option value="3+ feet">3+ feet</option>
                    </select>
                  </div>
                </ListGroupItem>

                <ListGroupItem>
                  <span style={{ fontWeight: "bold" }}>Soil:</span>
                  <div>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(event) => setPlantSoil(event.target.value)}
                      value={soil}
                      required
                    >
                      <option value=""></option>
                      <option value="Clay">Clay</option>
                      <option value="Sandy">Sandy</option>
                      <option value="Silty">Silty</option>
                      <option value="Peaty">Peaty</option>
                      <option value="Chalky">Chalky</option>
                      <option value="Loamy">Loamy</option>
                    </select>
                  </div>
                </ListGroupItem>

                <ListGroupItem>
                  <span style={{ fontWeight: "bold" }}>Sun:</span>
                  <div>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(event) => setPlantSun(event.target.value)}
                      value={sun}
                      required
                    >
                      <option value=""></option>
                      <option value="Direct light">Direct light</option>
                      <option value="Bright indirect light">
                        Bright indirect light
                      </option>
                      <option value="Medium indirect light">
                        Medium indirect light
                      </option>
                      <option value="Low light">Low light</option>
                    </select>
                  </div>
                </ListGroupItem>

                <ListGroupItem>
                  <span style={{ fontWeight: "bold" }}>Hardiness:</span>
                  <div>
                    <select
                      id="hardiness"
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(event) =>
                        setPlantHardiness(event.target.value)
                      }
                      value={hardiness}
                      required
                    >
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <span style={{ fontWeight: "bold" }}>
                    Watering Frequency:
                  </span>
                  <div>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(event) => setPlantWater(event.target.value)}
                      value={water}
                    >
                      <option value=""></option>
                      <option value="Daily">Daily</option>
                      <option value="3-5 times per week">
                        3-5 times per week
                      </option>
                      <option value="1-2 times per week">
                        1-2 times per week
                      </option>
                      <option value="2 times per month">
                        2 times per month
                      </option>
                      <option value="1 time per month">1 time per month</option>
                      <option value="Never">Never</option>
                    </select>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <span style={{ fontWeight: "bold" }}>Watering Time:</span>
                  <div>
                    <input
                      type="time"
                      onChange={(event) =>
                        setPlantWaterTime(event.target.value)
                      }
                      placeholder={waterTime}
                      value={waterTime}
                      required
                    ></input>
                  </div>
                </ListGroupItem>
                <ListGroupItem>
                  <span style={{ fontWeight: "bold" }}>Watering Days:</span>
                  <Select
                    className="dropdown"
                    placeholder="Select Days"
                    value={
                      waterDay
                        ? dayOptions.filter((obj) =>
                            waterDay.includes(obj.value)
                          )
                        : ""
                    }
                    options={dayOptions}
                    onChange={handleWaterDay}
                    isOptionDisabled={(option) => option.disabled}
                    isMulti
                    required
                  />
                </ListGroupItem>
              </ListGroup>
              <Button
                disabled={uploaded}
                variant="primary"
                onClick={handleSubmit}
              >
                Save Plant
              </Button>
            </Card.Body>
          </Card>
        </div>
      </section>
    </>
  );
};
export default AddPlant;
