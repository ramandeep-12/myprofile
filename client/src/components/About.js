import React, { useEffect,useState} from "react"
import girl from "../images/girl.jpg";
import unknown from "../images/unknown.jpg";
import 'bootstrap/dist/css/bootstrap.css';
import "../style.css/about.css"
import {useNavigate}from "react-router-dom";

const About = () => {
    const [userData,setUserData]=useState({})
    let history = useNavigate();

    const callaboutpage = async () => {
        try {
            const res = await fetch('/about', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            }
            );
            const data = await res.json();
            console.log(data);
            setUserData(data);
            if (!res.status===200) {
                throw new Error(res.err);
                console.log(res.err);
            }

        }
        catch (err) {
            console.log(err);
            history("/login");

        }
    }
    
        useEffect(() => {            
            callaboutpage();
        },[])
   

    return (
        <>
            <div className="containerabout border align-self-center">
                <form method="GET">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img id="imgper" src={userData.name==='sehk'?girl:unknown} alt="pic" />
                        </div>
                        <div className="content col-md-6">
                            <div className="profile-head">
                                <h5>{userData.name}</h5>
                                <h6>backend developer</h6>
                                <p className="profile-rating mt-3 mb-5">RANKINGS :<span>1/10</span></p>
                                <ul className="nav nav-tabs">
                                    <li className="nav-item" role="tablist">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" role="tab" href="#home">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" role="tab" href="#profile">Timeline</a>

                                    </li>

                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-md-2">
                            <input type="submit" className="profile-edit-btn" name="btn" value="profile" />
                        </div> */}
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <p>
                                    work link
                                </p>
                                <a href="https://www.youtube.com/c/GeeksforGeeksVideos/playlists" target="_blank">youtube</a><br />
                                <a href="https://www.youtube.com/c/GeeksforGeeksVideos/playlists" target="_blank">instagram</a><br />
                                <a href="https://www.youtube.com/c/GeeksforGeeksVideos/playlists" target="_blank">facebook</a><br />
                                <a href="https://www.youtube.com/c/GeeksforGeeksVideos/playlists" target="_blank">github</a><br />
                            </div>
                        </div>
                        <div className="col-md-8 pl-5 about-info" >
                            <div className="tab-content" id="mycontent">
                                <div className="tab-pane active" id="home" role="tabpanel" aria-labelledby="Home-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>User Id</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData._id}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Name</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.name}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.email}</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Phone</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{userData.phone}</p>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>profession</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>mern developer</p>
                                        </div>
                                    </div>
                                </div>
                                {/* </div>
                            </div> */}



                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Experience</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>5yrs</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>10$/hr</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Total Projects</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>15</p>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>English Level</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>Expert</p>
                                        </div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label>Availability</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>6 months</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </form>
            </div>
        </>
    )
}
export default About