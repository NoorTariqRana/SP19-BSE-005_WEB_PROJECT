import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";
const EditProduct = () => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
      name: "",
      price: ""
    });
  
    const { name, price} = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        loadUser();
    }, []);
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:3003/user/${id}`, user);
      history.push("/Homepage");
    };
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/user/${id}`);
        setUser(result.data);
      }
    return ( 
        <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A Product</h2>
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
              placeholder="Enter Food Price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>       
          <button className="btn btn-warning btn-block">Edit Product</button>
        </form>
      </div>
    </div>
    );
}
export default EditProduct;