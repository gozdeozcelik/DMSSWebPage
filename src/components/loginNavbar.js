import React from 'react'
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function loginNavbar({title}) {
  
  return (
    
    <nav className="navbar-nav  navbar-expand-lg navbar-light bg-light mb-3 p-3">
    
      <a href="/" className="navbar-brand"  style={{ fontWeight: 'bold', color:'blue' }} > {title}</a>
      <ul className="navbar-nav ml-auto">
    
      </ul>
     
    </nav>
    
  )
}
loginNavbar.propTypes = {
  title : PropTypes.string.isRequired
}
loginNavbar.defaultProps = {
  title : "Default App"
}
export default loginNavbar;