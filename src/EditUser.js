import React from "react";
import { useParams } from "react-router-dom";

function EditUser() {
  const params = useParams();
  return (
    <>
      <h1 className="ml-5">Edit User</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">ID: {params.id}</div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Name</label>
              <input type={"text"} className="form-control" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label>Email</label>
              <input type={"email"} className="form-control" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Country</label>
              <select className="form-control">
                <option>India</option>
                <option>USA</option>
                <option>China</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>State</label>
              <select className="form-control">
                <option>Tamil Nadu</option>
                <option>Karnataka</option>
                <option>Maharashtra</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>City</label>
              <select className="form-control">
                <option>Chennai</option>
                <option>Bengaluru</option>
                <option>Mumbai</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Phone Number</label>
              <input type={"text"} className="form-control" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Date of Birth</label>
              <input type={"date"} className="form-control" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select className="form-control">
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <input type={"submit"} className="btn btn-primary" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditUser;
