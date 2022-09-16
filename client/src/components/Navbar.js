import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {UserContext} from "../App";
// import logo from "../images/logo.jpg";
const Navbar = () => {
  const {state,dispatch} = useContext (UserContext);
const RenderMenu = ()=>{
  if(state){
    return(
      <>
         <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">Logout</NavLink>
        </li> 
      </>
    )
  }else{
    return(
      <>
      
      <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/login">Login</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">Registration</NavLink>
        </li>


      </>
    )
  }
}

    return (
        <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">
{/* <img src={logo} alt="logo"/> */}
<h2 className='purple'>Ujjwal Technical Tips</h2>
   </NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
     <RenderMenu/>      
      
      </ul>
     
    </div>
  </div>
</nav>
        </>
    );
};

export default Navbar;