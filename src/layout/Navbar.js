import React from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


function Navbar(props){
    return(
        <div>
            <h3>{props.tittle}</h3>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to = "/" className = "nav-link">Home</Link>
            </li>
            <li className="nav-item active">
              <Link to = "/add" className = "nav-link">Add User</Link>
           </li>
           <li className="nav-item active">
           <Link to = "/github" className = "nav-link">Project Files</Link>
        </li>
          
          </ul>
        </div>
    )
}
Navbar.propTypes = {

    tittle: PropTypes.string.isRequired
}
Navbar.defaultProps ={
    tittle:"Default App"
}
export default Navbar;
