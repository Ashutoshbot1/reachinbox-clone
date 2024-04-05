import React from "react";
import "./ListAllMails.scss";
import allinbox from "../../../assets/allinboxes.png";
import { CiSearch } from "react-icons/ci";
import Mail from "../Mails/Mail";

const ListAllMails = ({data,setThreadId}) => {
  

  return (
    <div className="listAllMails">
      <div className="upper">
        <div className="top">
          <div className="title">
            <img src={allinbox} alt="" />
          </div>
          <div className="text">
            <span className="number">{`${data?.length}/${data?.length}`}</span>
            <span className="selected">Inboxes selected</span>
          </div>
        </div>
        <div className="bottom">
          <div className="search">
            <CiSearch />
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="lower">
        {
          data?.map((msg)=>
            <Mail key={msg.id} data={msg} onClick={()=>setThreadId(msg.threadId)}/>
          )
        }
      </div>
    </div>
  );
};

export default ListAllMails;
