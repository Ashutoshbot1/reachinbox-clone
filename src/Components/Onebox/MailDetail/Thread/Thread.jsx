import React, { useEffect } from "react";
import "./Thread.scss";
import Bullet from "../../Bullet/Bullet";
import { FaChevronDown } from "react-icons/fa";
import Message from "../Message/Message/Message";

const Thread = ({data}) => {

    // useEffect(()=>{
    //     console.log(data);
    // },[data])
  return (
    <div className="thread">
      <div className="threadHeader">
        <div className="threadHeaderLeft">
          <div className="thName">Orland</div>
          <div className="thMail">orland@gmail.com</div>
        </div>
        <div className="threadHeaderCenter">
            <div className="thmeeting">
                <Bullet bgColor={"#E6D162"}></Bullet>
                <div className="thcomplete">
                    Meeting Complete
                </div>
                <div className="thdownarrow">
                    <FaChevronDown/>
                </div>
            </div>
            <div className="thmovewrapper">
                <span className="thmove">
                    Move
                </span>
                <div className="thdownarrow">
                    <FaChevronDown/>
                </div>
                
            </div>
        </div>
        <div className="threadHeaderRight">
            <div className="thRightMenuWrapper">
                <div className="thRightMenu">...</div>
            </div>
        </div>
      </div>
      <div className="threadBody">
        <div className="thbodyDayWrapper">
            <div className="thbodyDay">
                Today
            </div>
        </div>
        {data && data.map((message)=>(
            <Message  key={message.id} message={message}/>
        ))}
      </div>
    </div>
  );
};

export default Thread;
