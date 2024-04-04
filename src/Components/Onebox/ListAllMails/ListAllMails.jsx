import React, { useEffect, useState } from "react";
import "./ListAllMails.scss";
import allinbox from "../../../assets/allinboxes.png";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";

const ListAllMails = () => {
  const [data, setData] = useState(null);
  const token = useSelector((state) => state.token);
  //   console.log("all mail token ...............",token);

  useEffect(() => {
    if (token) {
      fetchMails();
    }
  }, [token]);

  function fetchMails() {
    const fullToken = "Bearer " + token;
    console.log(fullToken);
    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: fullToken,
      },
      redirect: "follow",
    };

    fetch("https://hiring.reachinbox.xyz/api/v1/onebox/list", requestOptions)
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error('Network response was not ok');
        // }
        // console.log(response);
        return response.json();
      })
      .then((result) => {
        // Process the fetched data here
        console.log(result);
      })
      .catch((error) => console.error("Error fetching mails:", error));
  }

  return (
    <div className="listAllMails">
      <div className="upper">
        <div className="top">
          <div className="title">
            <img src={allinbox} alt="" />
          </div>
          <div className="text">
            <span className="number">25/25</span>
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
      <div className="lower"></div>
    </div>
  );
};

export default ListAllMails;
