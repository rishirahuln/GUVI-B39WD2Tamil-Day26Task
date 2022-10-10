import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers([
      {
        id: 1,
        name: "Person 1",
        email: "person1@gmail.com",
        country: "India",
        state: "Tamil Nadu",
        city: "Chennai",
        phone: 9566799899,
        dob: "02-10-1969",
        gender: "Male",
      },
      {
        id: 2,
        name: "Person 2",
        email: "person2@gmail.com",
        country: "India",
        state: "Karnataka",
        city: "Bengaluru",
        phone: 8344144044,
        dob: "17-09-1979",
        gender: "Female",
      },
      {
        id: 3,
        name: "Person 3",
        email: "person3@gmail.com",
        country: "India",
        state: "Maharashtra",
        city: "Mumbai",
        phone: 9489555334,
        dob: "15-07-1993",
        gender: "Male",
      },
    ]);
  });
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center mb-4">
        <h1 className="h3 mb-0 text-gray-800 flex-grow-1">List Users</h1>
        <Link
          to={"/create-user"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Create User
        </Link>
        <Link
          to={"/edit-user/1"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm ml-2"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Edit User
        </Link>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            DataTables Example
          </h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>Date of Birth</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>State</th>
                  <th>City</th>
                  <th>Phone</th>
                  <th>Date of Birth</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.country}</td>
                      <td>{user.state}</td>
                      <td>{user.city}</td>
                      <td>{user.phone}</td>
                      <td>{user.dob}</td>
                      <td>{user.gender}</td>
                      <Link
                        to={`/profile/${user.id}`}
                        className="btn btn-warning mr-2"
                      >
                        Profile
                      </Link>
                      <Link
                        to={`/edit-profile/${user.id}`}
                        className="btn btn-dark"
                      >
                        Edit Profile
                      </Link>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListUsers;
