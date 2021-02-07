import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    FirstName: "",
    LastName: "",
    UserName: "",
    Age: "",
    Salary: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-success" to="/">
        Back
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">FirstName: {user.FirstName}</li>
        <li className="list-group-item">LastName: {user.LastName}</li>
        <li className="list-group-item">UserName: {user.UserName}</li>
        <li className="list-group-item">Age: {user.Age}</li>
        <li className="list-group-item">Salary: {user.Salary}</li>
      </ul>
    </div>
  );
};

export default User;
