import React from "react";
import "./Bullet.scss";

const Bullet = ({bgColor,style}) => {
  return (
    <span className="bullet" style={style}>
      <div className="circle" style={{backgroundColor:bgColor}}></div>
    </span>
  );
};

export default Bullet;
