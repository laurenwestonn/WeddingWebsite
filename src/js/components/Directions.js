import React from "react"

function Directions() {
  return (
    <div className="directions">
      <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />

      <div
        className="background-wrapper"
        href="https://www.instagram.com/p/B0_Ai1ohh-l/"
      >
        <div
          className="directions-background "
          style={{
            backgroundImage:
              "linear-gradient(rgba(150,150,150, 0.8), rgba(150,150,150, 0.7)),url(https://scontent.cdninstagram.com/vp/2b5df060e98c8b234fa40fa906082395/5E50BCF0/t51.2885-15/sh0.08/e35/s640x640/67403880_1312597192256359_1555069457954497549_n.jpg?_nc_ht=scontent.cdninstagram.com)"
          }}
        ></div>
      </div>

      <div className="top-layer">
        <h1 className="directions-title">How to get there</h1>
        <div className="direction-info">
          Styal lodge is situated in the south of Manchester, in Cheshire East,
          not far from Manchester Airport.
        </div>
        <div className="row">
          <div className="offset-1 col-10 offset-md-2 col-md-8">
            <div className="row">
              <div className="col-12 col-sm-6 col-xl-5">
                <a
                  className="direction-link"
                  href="https://www.google.com/maps/dir/Deansgate,+Manchester/Styal+Lodge+Weddings,+Station+Road,+Styal+SK9+4JN/@53.4130402,-2.3265686,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x487bb1dd30adf0f5:0x1f4fb79c3ed50253!2m2!1d-2.2495394!2d53.4782896!1m5!1m1!1s0x487a4d45eaad5471:0x91c28dafd5cd4d1c!2m2!1d-2.2388137!2d53.3555229!3e0"
                >
                  <div className="direction-option">
                    <h2 className="option-title">By car</h2>
                    <div className="info">
                      As the venue is near the airport, the length of journey
                      can vary by car. It should take just over half an hour
                      from Manchester, when taking the A5103 or the A56.
                    </div>
                    <div className="button-section">
                      <div className="button-text">View Map</div>
                      <span className="fas fa-chevron-right"></span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12 col-sm-6 offset-xl-2 col-xl-5">
                <a
                  className="direction-link"
                  href="https://www.google.com/maps/dir/Deansgate,+Manchester/Styal+Lodge+Weddings,+Station+Road,+Styal+SK9+4JN/@53.4038818,-2.2876608,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x487bb1dd30adf0f5:0x1f4fb79c3ed50253!2m2!1d-2.2495394!2d53.4782896!1m5!1m1!1s0x487a4d45eaad5471:0x91c28dafd5cd4d1c!2m2!1d-2.2388137!2d53.3555229!3e3"
                >
                  <div className="direction-option">
                    <h2 className="option-title">By train</h2>
                    <div className="info">
                      Trains run from Deansgate and Piccadilly, arriving at
                      Styal station an hour later. From there it's a 15 minute
                      walk, or a short taxi.
                    </div>
                    <div className="button-section">
                      <div className="button-text">View Map</div>
                      <span className="fas fa-chevron-right"></span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directions;
