import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

import {collection, getDoc, getDocs, query, where, doc} from "firebase/firestore"
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


    // getUsers will pick 3 random user who have plants in their garden, you can change the number of 
    // users to pick on line 34 the pickRandom function 2nd parameter
    const getUsers = async () => {

        const usersRef = collection(db, "users");
        const usersWithPlantsQ = query(usersRef, where("hasPlants", "==", true))
        const usersWithPlantsSnap = await getDocs(usersWithPlantsQ);

        const docs = usersWithPlantsSnap.docs;
        const randomPickedDocs = pickRandom(docs, 3);

        // console.log(randomPickedDocs);
        return randomPickedDocs;
    }

    const getUserPlant = async (userDoc) => {
        const userGardenRef = collection(db, "users", userDoc.id, "Garden");
        const userGardenSnap = await getDocs(userGardenRef);
 
        return userGardenSnap.docs[0];
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
    
    let plantsArr = [];

    useEffect(() => {

        getGarden()
        .then((res) => {
            let pickedItems = pickRandom(res, 4)
            setRandomList(pickedItems);
        })

        
        getUsers()
        .then((res) => {

            
            res.forEach((user) => {
                getUserPlant(user)
                .then((res) => {
                    console.log(res)
                    plantsArr.push(res);
                })
            })
            

            // let user = res[0];
            // console.log(user)

            // getUserPlant(user)
            // .then((res) => {
            //     console.log(res);
            // })
        })
        
    }, [])

    if (plantsArr.length != 0) {
        console.log(plantsArr);
    }
    

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