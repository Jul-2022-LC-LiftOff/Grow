import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

import {collection, getDoc, getDocs, query, where, doc} from "firebase/firestore"
import { db } from "../../firebase-config";

function GardenCarousel() {


    let [randomList, setRandomList] = useState([]);



    // getUsers will pick 3 random user who have plants in their garden, you can change the number of 
    // users to pick on line 34 the pickRandom function 2nd parameter
    const getUsers = async () => {

        const usersRef = collection(db, "users");
        const usersWithPlantsQ = query(usersRef, where("plantCount", ">", 0))
        const usersWithPlantsSnap = await getDocs(usersWithPlantsQ);
        // console.log(usersWithPlantsSnap);

        const docs = usersWithPlantsSnap.docs;
        // console.log(docs);

        const randomPickedDocs = pickRandom(docs, 3);
        // console.log(randomPickedDocs);

        return randomPickedDocs;
    }

    // getUserPlant will use a given userId and retreive the first plant object in the user's garden collection
    const getUserPlant = async (userDoc) => {
        const userGardenRef = collection(db, "users", userDoc.id, "Garden");
        const userGardenSnap = await getDocs(userGardenRef);
        const plantObj = userGardenSnap.docs[0].data();
        // console.log(plantObj);

        return plantObj;
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
    
    let resultArr = [];
    
    useEffect(() => {

        getUsers()
            .then((returnedUsers) => {

                // forEach will be buggy inside a promise
                for (let i = 0; i < returnedUsers.length; i++) {
                    let user = returnedUsers[i];
                    getUserPlant(user)
                    .then((res) => {

                        let userData = user.data();
                        let newObj = {...res, userName: userData.username};
                        resultArr.push(newObj);
                        setRandomList(resultArr);

                    })
                    
                } 
                
            })

    }, []);

    // console.log(randomList);
    let carouselItems = null;
    if (randomList) {
        console.log("list not ready");
        
        if (randomList.length == 3) {
        console.log(randomList.length);
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
                    <h1 className="text-white">{plant.name}</h1>
                    <h2 className="text-white">{`From user ${plant.userName}`}</h2>
                </Carousel.Caption>
            </Carousel.Item>

        )
        }
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