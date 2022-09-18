import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

import {collection, getDocs} from "firebase/firestore"
import { db } from "../../../firebase-config";

function GardenCarousel() {

    let randomList = [];
    let [garden, setGarden] = useState(null);

    // currently just showing plants
    const getGarden = async () => {
        let resultArr = [];
        const plantsRef = collection(db, "plants");
        const plantsSnap = await getDocs(plantsRef);
        plantsSnap.forEach((doc) => {
            resultArr.push(doc.data());
        })
        return resultArr;
    }


    // this is for later when user and user garden are linked 
    const getUsers = async () => {
        let userArr = [];
        const usersRef = collection(db, "users");
        const usersSnap = await getDocs(usersRef);
        usersSnap.forEach((doc) => {
            userArr.push(doc.data())
        })
    }

    useEffect(() => {

        getGarden()
        .then((res) => {
            setGarden(res);
        })
        
    }, [])

    let carouselItems = null;
    if (garden) {

        carouselItems = garden.map((plant) =>

            <Carousel.Item key={plant.name}>
                <img 
                    className="d-block w-100"
                    src={plant.image == "" ? require("./img/placeholder-image.jpg") : plant.image}
                    alt="slide"
                    witdh="100"
                    height="500"
                />
                <Carousel.Caption>
                    <h1>{plant.name}</h1>
                    <p>Sample Text</p>
                </Carousel.Caption>
            </Carousel.Item>

        )
        // console.log(carouselItems)
    }


    // let carouselItems = 
    // <Carousel.Item>
    //     <img 
    //         className="d-block w-100"
    //         src={require("./img/placeholder-image.jpg")}
    //         alt="First slide"
    //     />
    //     <Carousel.Caption>
    //         <h3>First slide label</h3>
    //         <p>Nulla vitae elit libero</p>
    //     </Carousel.Caption>
    // </Carousel.Item>



    return (
        <div>
            <Carousel>
                {carouselItems}
            </Carousel>
        </div>
        
    )
}


export default GardenCarousel;