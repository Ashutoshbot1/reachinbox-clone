import React from "react";
import "./Status.scss";
import Bullet from "../Bullet/Bullet";

const Status = ({color}) => {
  return (
    <span className="status">
      <div className="statusWrapper">
        <Bullet bgColor={color} />
        <span className="text" style={{color}}>Interested</span>
      </div>
    </span>
  );
};

export default Status;
