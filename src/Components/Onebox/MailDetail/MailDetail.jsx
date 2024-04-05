import React, { useEffect, useState } from 'react';
import './MailDetail.scss';
import Thread from './Thread/Thread';
import Button from '../../Common/Button/Button';
import ReplyBox from './ReplyBox/ReplyBox';

const MailDetail = ({threadId}) => {
    const [data,setData]=useState("");
    const token=import.meta.env.VITE_APP_TOKEN;
    const [replyBtn,setReplyBtn]=useState(false);
    const [replyBox,setReplyBox]=useState(false);

    useEffect(()=>{
        fetchThreads();
      },[threadId])


    //   useEffect(()=>{
    //     console.log("data..........",data);
    //   },[data])
    
    
      function fetchThreads() {
    
        const fullToken = "Bearer " + token;
        // console.log(fullToken);
        var requestOptions = {
          method: "GET",
          headers: {
            Authorization: fullToken,
          },
          redirect: "follow",
        };
    
        fetch(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`, requestOptions)
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            // console.log(response);
            return response.json();
          })
          .then((result) => {
            const {data:res}=result
            setData(res);
            setTimeout(()=>{
              setReplyBtn(true);
            })
          })
          .catch((error) => console.error("Error fetching mails:", error));
      }
  return (
    <div className='mailDetail'>
      <div className="mdleft">
        {data && <Thread data={data}/>}
        
      </div>
      <div className="mdright">
            
      </div>
      {replyBtn && <div className="replyButton" onClick={()=>setReplyBox(true)}>
        <Button text={"Reply"}/>
      </div>}

      {replyBox && <ReplyBox setReplyBox={setReplyBox}/>}

    </div>
  )
}

export default MailDetail
