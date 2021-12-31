import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import"./menucss.css";


function TopMenu (){

    return ( 
      
    
      
      <Navbar className="color "variant="dark"  expand="lg"  collapseOnSelect>
        
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
<Link className="size" to="/">Home</Link>

<Link className="size" to="/Homepage">Products</Link>

<Link className="size" to="/AboutUs">AboutUs</Link>
<Link  className="size"to="/Fashion">Fashion</Link>

<Link className="size" to="/Beauty">Beauty</Link>

          </Nav>
        </Navbar.Collapse>

      </Navbar> 
           
            );
}
export default TopMenu;
