import React ,{useState ,useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./index.css";
const Homepage = () => {
  const [users,setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/user");
    setUser(result.data.reverse());
  }
  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/user/${id}`);
    loadUsers();
  };
  return (
    <div className="container">
      <div className="py-4">
        <br/>
        <table class="table border shadow">
  <thead class="table-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product Name</th>
      <th scope="col">Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.price}</td>
                <td>
                  <Link class="btn btn-outline-primary ms-2" to={`/user/${user.id}`}>View</Link>
                  <Link class="btn btn-outline-success ms-2" to={`/user/edit/${user.id}`}> Edit</Link>
                  <Link class="btn btn-outline-danger ms-2" onClick={() => deleteUser(user.id)}>Delete</Link>
                </td>
              </tr>
              
            ))}  
  </tbody>
  <Link className="btn btn-outline-dark me-1" exact to="/user/add">Add Product</Link>
</table>
        </div>
        </div>
     );
}
 
export default Homepage;