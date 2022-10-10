import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get("status"));
  }, []);
  return (
    <>
      <h1 className="ml-5">Profile</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">ID: {params.id}</div>
          <div className="col-lg-12">
            query params: {searchParams.get("status")}
          </div>
          <div className="col-lg-6">Name: Person1</div>
          <div className="col-lg-6">Email: person1@gmail.com</div>
          <div className="col-lg-6">Country: India</div>
          <div className="col-lg-6">State: Tamil Nadu</div>
          <div className="col-lg-6">City: Chennai</div>
          <div className="col-lg-6">Phone: 9566799899</div>
          <div className="col-lg-6">DOB: 02-10-1969</div>
          <div className="col-lg-6">Gender: Male</div>
        </div>
      </div>
    </>
  );
}

export default Profile;
