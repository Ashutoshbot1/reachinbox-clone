import React from "react";
import "./Navbar.scss";
import darkMail from "../../../assets/darkMail.png";
import userIcon from "../../../assets/user_icon.png";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import icon4 from "../../../assets/icon4.png";
import icon5 from "../../../assets/icon5.png";
import icon6 from "../../../assets/icon6.png";
import icon7 from "../../../assets/icon7.png";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="top">
        <div className="topLogo">
          <img src={darkMail} alt="" />
        </div>
      </div>
      <div className="center">
        
        <div className="icons">
            <div className="iconWrapper">
                <img src={icon1} alt="" />
            </div>
            <div className="iconWrapper">
                <img src={icon2} alt="" />
            </div>
            <div className="iconWrapper">
                <img src={icon3} alt="" />
            </div>
            <div className="iconWrapper">
                <img src={icon4} alt="" />
            </div>
            <div className="iconWrapper">
                <img src={icon5} alt="" />
            </div>
            <div className="iconWrapper">
                <img src={icon6} alt="" />
            </div>
            <div className="iconWrapper">
                <img src={icon7} alt="" />
            </div>
        </div>
      </div>
      <div className="bottom">
        <div className="userIconWrapper">
          <img src={userIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
