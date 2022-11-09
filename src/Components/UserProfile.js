import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./profile.css";

function UserProfile({ token }) {
  const [userList, setUserList] = useState([]);
  let userURL = `https://uat.ordering-farmshop.ekbana.net/api/v4/profile/show`;
  const getProfile = async () => {
    try {
      const response = await axios({
        method: "get",
        url: userURL,
        headers: {
          "Api-key": process.env.REACT_APP_API_KEY,
          "Warehouse-Id": 1,
          Authorization: `Bearer ${token}`,
        },
      });
      setUserList(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, [token]);
  console.log("userList", userList);

  return (
    <>
      <div className="products-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>User Profile</li>
          </ul>
        </div>
      </div>
      {/* <!-- //products-breadcrumb -->
<!-- banner --> */}
      <div className="banner">
        <div className="w3l_banner_nav_right">
          <div className="events">
            <h3>Manage Profile</h3>
            <div className="wrapper">
              <div className="prof-right">
                <img
                  className="pro-img"
                  src={userList.image}
                  alt="user Profile"
                ></img>
                <p>
                  {userList.firstName} {userList.lastName}
                </p>
              </div>
              <div className="details">
                <label>Full Name </label>
                <p>
                  {userList.firstName} {userList.lastName}
                </p>
                <label>Email</label>
                <p>{userList.email} </p>
                <label>Contact Number</label>
                <p> {userList.mobileNumber} </p>
              </div>
            </div>
          </div>
          {/* <!-- //events --> */}
        </div>
        <div className="clearfix"></div>
      </div>
    </>
  );
}

export default UserProfile;
