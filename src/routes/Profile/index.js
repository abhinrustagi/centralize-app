import React, { useEffect, useState } from "react";
import useUserInfo from "../../context/user";
import { useParams, useNavigate } from "react-router-dom";
import { findUserProfile } from "../../utils";
import Helmet from "react-helmet";

const Profile = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [{ user }, dispatch] = useUserInfo();

  // useEffect(() => {
  //   findUserProfile(params.username).then((profile) => {
  //     if (!profile) {
  //       navigate("/", { replace: true });
  //     } else {
  //       setData({ ...profile });
  //     }
  //   });
  //   // eslint-disable-next-line
  // }, [params.username]);

  return (
    <>
      <Helmet>
        <title>{params.username}'s Profile – Centralize</title>
      </Helmet>
      <div id="hero" className="bg-sky-200 py-10">
        <div className="container">
          <h1 className="font-bold text-3xl">{params.username}</h1>
        </div>
      </div>
      <div className="container my-10"></div>
    </>
  );
};

export default Profile;
