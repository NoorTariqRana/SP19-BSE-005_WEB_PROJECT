import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Beauty from "./componnets/Beauty";
import Fashion from "./componnets/Fashion";
import LandingPage from "./componnets/landingpage";
import TopMenu from "./componnets/menubar";
import Login from "./componnets/login";
import AboutUs from "./componnets/AboutUs";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Feedback from "./componnets/Feedback";
import notFound from "./componnets/notFound";
import Homepage from "./componnets/Homepage";
import AddProduct from "./componnets/addproduct";
import EditProduct from "./componnets/EditProduct";
import Product from "./componnets/Product";
function App() {
  return (
    
    <div className="container">
       
   <div className="row">
   <div className="col-12 mx-auto">
    <Router> 
    <h1 className="title" style={{textAlign:'center'}}>FASHION MANSION </h1>
    <div style={{padding:'2rem'}}>
  <TopMenu/>
   <Switch>
     <Route path="/Beauty"  component={Beauty}/>
     <Route path="/AboutUs"  component={AboutUs}/>
     <Route path="/user/add"  component={AddProduct}/>
     <Route path="/user/edit/:id"  component={EditProduct}/>
     <Route path="/user/:id" component={Product} />
     <Route path="/Fashion"  component={Fashion}/>
     <Route path="/Feedback"  component={Feedback}/>
     <Route path="/login"  exact component={Login}/>
     <Route path="/Homepage"  exact component={Homepage}/>
     <Route path="/" exact component={LandingPage}/>

     <Route component={notFound}/>
   </Switch>
   </div>
   
    </Router>

</div>

    
    </div>
</div>
  
  );
}

export default App;
