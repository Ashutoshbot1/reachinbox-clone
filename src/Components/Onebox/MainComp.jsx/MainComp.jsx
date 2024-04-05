import React, { useEffect, useState } from "react";
import './MainComp.scss'
import ListAllMails from "../ListAllMails/ListAllMails";
import Message from "../MailDetail/Message/Message/Message";
import MailDetail from "../MailDetail/MailDetail";

// let token1="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoic2hhaGFuZXByaXlhbmthczAxQGdtYWlsLmNvbSIsImlkIjo5LCJmaXJzdE5hbWUiOiJQcml5YW5rYSIsImxhc3ROYW1lIjoiU2hhaGFuZSJ9LCJpYXQiOjE3MTEzODYwMzUsImV4cCI6MTc0MjkyMjAzNX0.aawIHorCsYmq5bCQViAo7oEmEvwBHl_LhBq-Hh3sYGc"
const MainComp = () => {
  const [data, setData] = useState(null);
  const [threadId,setThreadId]=useState(null);
  const token=import.meta.env.VITE_APP_TOKEN;
  

  // useEffect(()=>{
  //   console.log("ThreadId........",threadId);
  // },[threadId])

  useEffect(()=>{
    fetchMails()
  },[])


  function fetchMails() {

    const fullToken = "Bearer " + token;
    // console.log(fullToken);
    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: fullToken,
      },
      redirect: "follow",
    };

    fetch("https://hiring.reachinbox.xyz/api/v1/onebox/list", requestOptions)
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
        // console.log(res);
      })
      .catch((error) => console.error("Error fetching mails:", error));
  }
  return (
    <div className="mainComp">
      <div className="left">
        <ListAllMails data={data} setThreadId={setThreadId} />
      </div>
      <div className="right">
        {threadId &&<MailDetail threadId={threadId}/>}
      </div>
    </div>
  );
};

export default MainComp;
