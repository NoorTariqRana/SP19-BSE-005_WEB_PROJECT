import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
const AddUser = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    price: ""
  });

  const { name, price} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/user", user);
    history.push("/Homepage");
  };
  return ( 
      <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Add A Product</h2>
      <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg mb-2"
            placeholder="Enter Product Name"
            name="name"
            value={name}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control form-control-lg mb-2"
            placeholder="Enter Product Price"
            name="price"
            value={price}
            onChange={e => onInputChange(e)}
          />
        </div>       
        <button className="btn btn-primary btn-block">Add Product</button>
      </form>
    </div>
  </div>
    );
}
export default AddUser;