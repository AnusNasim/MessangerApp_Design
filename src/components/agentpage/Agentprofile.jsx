import React from "react";
import "./Agentpg.css";
import { MdPermMedia } from "react-icons/md";
const Agentprofile = () => {
  return (
    <>
      <div className="mainAgent">
        <div className="picture">
          <img
            src={require("../images/agentprofile.jpeg")}
            style={{
              width: "200px",
              height: "250px",
              borderRadius: "20px 20px 20px 20px",
            }}
          />
          <div className="separator"> </div>
        </div>

        

        <div className="aboutme about">
          <h5 className="ab1">About me</h5>
          <p className="ab2 a2">
            ‘’Hello! I am Marry, I am an experience Travel agent since 10 years.
            I love to help people who loves to travel, eat and have fun’’
          </p>
        </div>
        <div className="agentMedia agmedia">
          <div className="media1">
            <MdPermMedia style={{ color: "#424197" }} />
            Media(20)
            <div className="pic">
              <img
                src={require("../images/locations.png")}
                width="190px"
                height="140px"
                style={{ borderRadius: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agentprofile;
