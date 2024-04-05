import React, { useState } from "react";
import "./ReplyBox.scss";
import { IoMdClose } from "react-icons/io";
import Button from "../../../Common/Button/Button";

const ReplyBox = ({setReplyBox}) => {
  const [input, setInput] = useState("Welcome");
  const [textareaValue,setTextareaValue]=useState("Hi Jeanne,")
  return (
    <div className="replybox">
      <div className="replyboxheader">
        <div className="replytext">Reply</div>
        <div className="replyClose" onClick={()=>setReplyBox(false)}>
          <IoMdClose />
        </div>
      </div>
      <div className="replyTowrapper">
        <div className="replyTo">
          <span className="rplyLft">To:</span>
          <span className="rplyRht">jeanne@gmail.com</span>
        </div>
      </div>
      <div className="replyTowrapper">
        <div className="replyTo">
          <span className="rplyLft">From:</span>
          <span className="rplyRht">ashu@gmail.com</span>
        </div>
      </div>
      <div className="replyTowrapper">
        <div className="replyTo">
          <span className="rplyLft">Subject:</span>
          <input
            className="inptReply rplyRht"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
      <div className="replyPara">
        <textarea name="" id="" cols="30" rows="10" value={textareaValue} onChange={(e)=>setTextareaValue(e.target.value)}></textarea>
      </div>
      <div className="replyBottom">
        <div className="replyBtnSend">
          <Button text={"Send"} />
        </div>
      </div>
    </div>
  );
};

export default ReplyBox;
