import React from "react";
import {
  AiFillStar,
  AiFillCreditCard,
  AiFillFire,
  AiOutlineCar,
  AiFillEye,
  AiOutlineUserAdd,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { FaUserCheck } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import {
  MdOutlineFreeBreakfast,
  MdMessage,
  MdOutlineLocalHotel,
  MdLocationPin,
} from "react-icons/md";
const Agentinfo = () => {
  return (
    <>
      <div className="agentinfo">
        <div className="agentinfo1">
          <div className="name">
            <h3>
              Marry Rose{" "}
              <span>
                <MdLocationPin />
                Canada
              </span>
            </h3>
            <p>Travel agenr @HiLifeagency</p>
          </div>

          <div>
            <p className="review1">
              Reviews <AiFillStar style={{ color: "yellow" }} />{" "}
              <AiFillStar style={{ color: "yellow" }} />{" "}
              <AiFillStar style={{ color: "yellow" }} />{" "}
              <AiFillStar style={{ color: "yellow" }} />{" "}
              <AiFillStar style={{ color: "yellow" }} />{" "}
            </p>
          </div>

          <div className="sntmsg">
            <div>
              <MdMessage style={{ color: "#424197" }} /> Sent Message
            </div>
            <div className="tick">
              <TiTick /> Contact
            </div>
            <div>
              <FaUserCheck style={{ color: "#424197" }} />
              Report user
            </div>
          </div>

          <div className="timeline">
            <div>
              <AiFillEye style={{ color: "#424197" }} /> TimeLine
            </div>
            <div style={{ marginLeft: "50px" }}>
              {" "}
              <AiOutlineUserAdd style={{ color: "#424197" }} /> About
            </div>
          </div>
          <div className="separator separator1"> </div>
        </div>

        <div className="main_information">
          <div className="information">
            <div>
              Phone: <span className="cor">+18143008429</span>
            </div>
            <div>
              Address:{" "}
              <span className="cor">Street 45,Ball road near cinema city.</span>
            </div>
            <div>
              Email: <span className="cor">rosemarry@hilife.com</span>
            </div>
            <div>
              {" "}
              website: <span className="cor">hilifeagency.com</span>
            </div>
            <div>
              Social Media:{" "}
              <span className="cor">
                <AiFillTwitterCircle />
                <BsFacebook />
                <AiFillInstagram />
              </span>
            </div>
          </div>

          <div className="hi_lifeagency">
            <div>
              {" "}
              <button
                style={{
                  color: "white",
                  backgroundColor: "#ED5B75",
                  outline: "transparent",
                }}
                className="hi_btn"
              >
                HI-LIFE AGENCY OFFER
              </button>
            </div>
            <div className="break">
              <div>
                <MdOutlineFreeBreakfast
                  style={{ fontWeight: "26px", fontSize: "30px" }}
                />{" "}
                <span>Break Fast</span>
              </div>
              <div></div>
            </div>
            <div className="stay">
              <div>
                <MdOutlineLocalHotel
                  style={{ fontWeight: "26px", fontSize: "30px" }}
                />{" "}
                <span>One Night Stay</span>
              </div>
              <div></div>
            </div>
            <div className="car">
              <div>
                {" "}
                <AiOutlineCar
                  style={{ fontWeight: "26px", fontSize: "30px" }}
                />{" "}
                <span>Free airport Pickup</span>
              </div>
              <div></div>
            </div>
            <div className="fire">
              <div>
                <AiFillFire style={{ fontWeight: "26px", fontSize: "30px" }} />
                <span>Free Bone Fire</span>
              </div>
            </div>
            <div className="bank">
              <div>
                <AiFillCreditCard
                  style={{ fontWeight: "26px", fontSize: "30px" }}
                />{" "}
                <span>Easy Bank Transfer</span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agentinfo;
