// import "./main_body.css"
import GardenCarousel from "./GardenCarousel";
import { Container, Col } from "react-bootstrap";

function MainBody() {

    return (

    <div className="main-body">

        <Container >

            <Col xs={8} className="mx-auto mt-5 mb-4">
                <h1 className="display-4 text-center mx-auto">About Us</h1>
                <p className="lead">
                    "Here at Grow, we inform you with all the necessary knowledge you need
                    to take greate care of the plants around you. Find the plant you are after, 
                    and get all the key knowledge that will help you to take care of your green friend.
                    Also feel free to check out what others are growing in their garden."
                </p>
            </Col>
    
            <Col xs={8} className="mx-auto">
                <GardenCarousel />
            </Col>
        </Container>

    </div>
    )
}

export default MainBody;