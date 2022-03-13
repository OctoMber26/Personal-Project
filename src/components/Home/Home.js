import React,{Fragment} from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

const Home=()=>{
    return(
        <Fragment>
            <div className="container-fluid text-center mt-5">
                <h1 className="title">Choose how do you want to comunicate!</h1>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-between">
                    <div className="col-lg-6 col-sm-12 text-center speech_text">
                    <NavLink className="link" to="/speech"><p className="speech">Speech to Text</p></NavLink>
                    </div>
                    <div className="col-lg-6 col-sm-12 text-center text_speech">
                    <NavLink className="link" to="text"><p className="text">Text to Speech</p></NavLink>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;