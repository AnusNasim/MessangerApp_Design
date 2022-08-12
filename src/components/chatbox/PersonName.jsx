import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { GrDocument } from "react-icons/gr";
import {
  AiFillSetting,
  AiFillPlusCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import Chating from "./Chating";

function PersonName() {
  return (
    <>
      <div className="chaticon_container">
        <div className="icon_list">
          <ul>
            <li>
              <BiMessageDetail />
            </li>
            <li>
              <FaUserFriends />
            </li>
            <li>
              <MdDateRange />
            </li>
            <li>
              <GrDocument />
            </li>
            <li>
              <AiFillSetting />
            </li>
          </ul>
        </div>

        <div className="icon_message">
          <div
            style={{
              marginRight: "10px",
              marginTop: "-7px",
              color: "#424197",
              fontSize: "20px",
            }}
          >
            <AiFillPlusCircle />
          </div>
          <div>
            <p style={{ fontSize: "20px", color: "#424197" }}>message</p>
          </div>
          <div
            style={{
              marginLeft: "10px",
              marginTop: "-7px",
              color: "#424197",
              fontSize: "20px",
            }}
          >
            <IoMdNotifications />
          </div>
        </div>

        <div className="button_icons">
          <button style={{ backgroundColor: "#424197" }}>Inbox</button>
          <button>Request</button>
          <button>Group</button>
        </div>

        <div className="input_field">
          <input type="text" placeholder="Search Name" className="iput" />
          <a href="#">
            <AiOutlineSearch />{" "}
          </a>
        </div>

        <div className="chatimages">
          <div className="imagess image1">
            <img
              src={require("../images/image1.jpeg")}
              alt=""
              srcset=""
              style={{ width: "40px", height: "40px", borderRadius: "50px" }}
            />
            <h6 className="image_name">
              James Mario <br />{" "}
              <div className="image_time">
                <p>20 min ago</p>
              </div>
            </h6>
          </div>
        </div>

        <div className="chatimages chatimages1">
          <div className="imagess">
            <img
              src={require("../images/image2.jpeg")}
              alt=""
              srcset=""
              style={{ width: "40px", height: "40px", borderRadius: "50px" }}
            />
            <h6 className="image_name">
              Alex Dan <br />{" "}
              <div className="image_time">
                <p>10 min ago</p>
              </div>
            </h6>
          </div>
        </div>

        <div className="chatimages chatimages1">
          <div className="imagess">
            <img
              src={require("../images/image4.jpeg")}
              alt=""
              srcset=""
              style={{ width: "40px", height: "40px", borderRadius: "50px" }}
            />
            <h6 className="image_name">
              Herry Mathway <br />{" "}
              <div className="image_time">
                <p>20 min ago</p>
              </div>
            </h6>
          </div>
        </div>
        <div className="chatimages chatimages1">
          <div className="imagess image1">
            <img
              src={require("../images/image5.jpeg")}
              alt=""
              srcset=""
              style={{ width: "40px", height: "40px", borderRadius: "50px" }}
            />
            <h6 className="image_name">
              Jenny Shane <br />{" "}
              <div className="image_time">
                <p>20 min ago</p>
              </div>
            </h6>
          </div>
        </div>
        <div className="chatimages chatimages1">
          <div className="imagess image1">
            <img
              src={require("../images/image6.jpeg")}
              alt=""
              srcset=""
              style={{ width: "40px", height: "40px", borderRadius: "50px" }}
            />
            <h6 className="image_name">
              Jone Dan <br />{" "}
              <div className="image_time">
                <p>20 min ago</p>
              </div>
            </h6>
          </div>
        </div>
        <div className="chatimages chatimages1">
          <div className="imagess">
            <img
              src={require("../images/image7.jpeg")}
              alt=""
              srcset=""
              style={{ width: "40px", height: "40px", borderRadius: "50px" }}
            />
            <h6 className="image_name">
              Maria Alex <br />{" "}
              <div className="image_time">
                <p>20 min ago</p>
              </div>
            </h6>
          </div>
        </div>
        <div className="chatimages chatimages1">
          <div className="imagess">
            <img
              src={require("../images/images3.jpeg")}
              alt=""
              srcset=""
              style={{ width: "40px", height: "40px", borderRadius: "50px" }}
            />
            <h6 className="image_name">
              Keylie james <br />{" "}
              <div className="image_time">
                <p>20 min ago</p>
              </div>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonName;
