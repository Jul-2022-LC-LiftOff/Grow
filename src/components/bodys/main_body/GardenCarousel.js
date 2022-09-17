import { Carousel } from "react-bootstrap";

function GardenCarousel() {

    let randomList = []
    let carouselItems = 
    <Carousel.Item>
        <img 
            className="d-block w-100"
            src={require("./img/placeholder-image.jpg")}
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero</p>
        </Carousel.Caption>
    </Carousel.Item>



    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={require("./img/placeholder-image.jpg")}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        
    )
}


export default GardenCarousel;