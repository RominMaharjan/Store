import React from "react";
import { useNavigate } from "react-router-dom";
import "./error.css";

function Errorpage() {
  let navigate = useNavigate();
  return (
    <div className="text-center">

      <div className="err-404">
        <img src="../Assets/images/error.png" alt="Error page"/>
        <h1>404 Error</h1>
      <p>Sorry, this page doesn't exist</p>
     
      </div>
      <button className="err-btn" onClick={() => navigate("/")}>Back to Home page</button>
     
      <div className="clearfix"></div>
    </div>
    
  );
}

export default Errorpage;
