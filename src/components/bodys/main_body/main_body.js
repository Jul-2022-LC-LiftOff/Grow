import "./main_body.css"
import GardenCarousel from "./GardenCarousel";

function MainBody() {

    return (

    <div className="main-body">
        <div className="info-block px-3 py-3 pt-md-5 pd-md-4 mx-auto text-center">
            <h1 className="display-4">About Us</h1>
            <p className="lead">
                "Here at Grow, we inform you with all the necessary knowledge you need
                to take greate care of the plants around you. Find the plant you are after, 
                and get all the key knowledge that will help you to take care of your green friend.
                Also feel free to check out what others are growing in their garden."
            </p>
        </div>

        {/* <div className="container col-md-8 mt-5 py-5 text-center">
            
            <h2 className="display-4">Gardens</h2>

            <div className="row mt-4 mx-auto">

                <div className="col-md-4">
                    <div className="card">
                        <img src={require("./img/placeholder-image.jpg")} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Garden Name1</h5>
                            <p className="card-text">Garden Detail</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src={require("./img/placeholder-image.jpg")} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Garden Name2</h5>
                            <p className="card-text">Garden Detail</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src={require("./img/placeholder-image.jpg")} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Garden Name2</h5>
                            <p className="card-text">Garden Detail</p>
                        </div>
                    </div>
                </div>

            </div>
        </div> */}

        <GardenCarousel />

    </div>
    )
}

export default MainBody;