import React from "react";
import "./scss/home.scss";
import RobAndLauren from "./images/RobAndLauren.jpg";

function App() {
  return (
    <>
      <div className="row no-gutters">
        <div className="col-12">
          <div className="cover-photo-container">
            <div
              className="photo"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0,0, 0, 0.5), rgba(0, 0, 0, 0.8)),url(" +
                  RobAndLauren +
                  ")"
              }}
            ></div>
            <div className="overlay"></div>
            <div className="content">
              <div className="title">Rob & Lauren</div>
              <div className="subtitle">5th July 2020</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
