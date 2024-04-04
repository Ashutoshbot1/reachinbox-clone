import React, { useEffect } from "react";
import Onebox from "../Components/Onebox/Onebox";
import { useDispatch } from "react-redux";
import { addToken } from "../store/slices/tokenSlice";

const OneboxPage = () => {
  const dispatch=useDispatch();

  useEffect(()=>{
    storeToken();
  },[])

  function storeToken(){
    const currentUrl=window.location.href;
    const token=(currentUrl.split("=")[1]);
    // console.log(currentUrl.split("="));
    dispatch(addToken(token));
    
  }
  return (
    <div className="oneboxPage">
      <Onebox/>
    </div>
  );
};

export default OneboxPage;
