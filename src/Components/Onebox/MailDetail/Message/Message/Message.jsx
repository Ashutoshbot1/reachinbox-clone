import React, { useEffect } from 'react';
import './Message.scss';

const Message = ({message}) => {
  useEffect(()=>{
    console.log(message)
  },[Message])
  return (
    <div className='message'>
      <div className="messageHeader">
        <div className="messageHeaderWrapper">
            <div className="subjectDate">
                <div className="subject">
                    New Product Launch
                </div>
                <div className="date">
                    20 june 2022 : 9:16AM
                </div>
            </div>
            <div className="from">
                {`from:${message.fromEmail}`} {message.cc.length && <span className='cc'>{`cc:${message.cc[0]}`}</span>}
            </div>
            <div className="to">
                {`to:${message?.toEmail}`}
            </div>

        </div>
      </div>
      <div className="messageContent">
            <div className="messageContentWrapper">
              {
                message?.body
              }
                
            </div>
        </div>
    </div>
  )
}

export default Message
