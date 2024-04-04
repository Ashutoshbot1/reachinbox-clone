import React from "react";
import './MainComp.scss'
import ListAllMails from "../ListAllMails/ListAllMails";

const MainComp = () => {
  return (
    <div className="mainComp">
      <div className="left">
        <ListAllMails />
      </div>
      <div className="right">
        
      </div>
    </div>
  );
};

export default MainComp;
