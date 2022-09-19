import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

import {collection, getDocs} from "firebase/firestore"
import { db } from "../../firebase-config";

function GardenCarousel() {

    // let [garden, setGarden] = useState(null);
    let [randomList, setRandomList] = useState(null);


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

    function pickRandom(arr, numOfItem) {
        let itemPool = arr;
        let itemCount = arr.length;
        let resultArr = [];
        let counter = 0;
    
        while (counter < numOfItem) {
            let index = Math.floor(Math.random() * itemCount);
            let item = itemPool[index];
    
            if (!resultArr.some((element) => element == item)) {
                resultArr.push(item);
                counter += 1;
            }
        }
    
        return resultArr;
    }

    useEffect(() => {

        getGarden()
        .then((res) => {
            let pickedItems = pickRandom(res, 4)
            setRandomList(pickedItems);
        })

        
    }, [])

    let carouselItems = null;
    if (randomList) {

        carouselItems = randomList.map((plant) =>

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
    }




    return (
        <div>
            <Carousel>
                {carouselItems}
            </Carousel>
        </div>
        
    )
}


export default GardenCarousel;