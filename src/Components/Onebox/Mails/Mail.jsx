import React, { useEffect, useState } from "react";
import "./Mail.scss";
import icon4 from "../../../assets/icon4.png";
import Bullet from "../Bullet/Bullet";
import Status from "../Status/Status";
import dayjs from "dayjs";

const bulletStyle = {
  position: "absolute",
  top: "23%",
  left: "-4px",
};
const Mail = ({ data,onClick }) => {

//   console.log("data", data);
  const [date,setDate]=useState("");
  const [subject,setSubject]=useState("");

  useEffect(() => {
    if (data) {
        formatdate();
        formatSubject();
    }
  }, [data]);

  function formatSubject(){
    // console.log(data.subject);
    const sub=data.subject.split(" ").slice(0,5).join(" ");
    // console.log(sub)
    setSubject(sub);
    
  }

  function formatdate() {
    const timestamp = "2022-02-02T10:24:55.000Z";
    const parsedDate = dayjs(timestamp);

    // Format the date as "MMM DD"
    const formattedDate = parsedDate.format("MMM DD");
    setDate(formattedDate);
  }

  return (
    <div className="mail" onClick={onClick}>
      <Bullet bgColor={"rgba(92, 124, 250, 1)"} style={bulletStyle} />
      <div className="wrapper">
        <div className="mailContent">
          <h3 className="email">
            {data?.fromEmail} <span>{date}</span>
          </h3>
          <p className="mailMessage">{subject}</p>
        </div>
        <div className="marks">
          <Status color={"rgba(87, 224, 166, 1)"} />
          <span className="campaign">
            <div className="campaignWrapper">
              <img src={icon4} alt="" />
              <span>Campaign Name</span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Mail;
