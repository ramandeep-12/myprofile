import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import pic1 from "../images/projectpic1.jpg";
import pic2 from "../images/projectpic2.jpg";
import pic3 from "../images/projectpic3.jpg";
import pic4 from "../images/projectpic4.jpg";
const Home = () => {
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p>welcome</p>
                    <h1>mern developers available for freelancing</h1>
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="200">
                                <img src={pic1} class="d-block w-100" alt="..." style={{width:"100%", height:"500px"}}/>
                            </div>
                            <div className="carousel-item" data-bs-interval="200">
                                <img src={pic2} class="d-block w-100" alt="..." style={{width:"100%", height:"500px"}}/>
                            </div>
                            <div className="carousel-item" data-bs-interval="200" >
                                <img src={pic3} class="d-block w-100" alt="..." style={{width:"100%", height:"500px"}}/>
                            </div>
                            <div className="carousel-item" data-bs-interval="200" >
                                <img src={pic4} class="d-block w-100" alt="..." style={{width:"100%", height:"500px"}}/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Home