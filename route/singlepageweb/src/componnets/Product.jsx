import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [user, setUser] = useState({
    name: "",
    price: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/user/${id}`);
    setUser(res.data);
  };
  return (
    <div className="container py-4">
      <h1 className="display-4">Product Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {user.name}</li>
        <li className="list-group-item">price: {user.price}</li>
      </ul>
      <br/>
      <Link className="btn btn-outline-primary" to="/Homepage">
        back to Home Page
      </Link>
      
    </div>
  );
};

export default Product;