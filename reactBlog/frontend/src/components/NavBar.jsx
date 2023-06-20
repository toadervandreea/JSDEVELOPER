import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function NavBar() {
    const { authenticated } = useContext(AuthContext);
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/">React Blog RNEM</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"> <Link to="/" className='nav-link active' aria-current="page">Home</Link></li>
                        <li className="nav-item"> <Link to="/posts" className='nav-link'>Posts</Link></li>
                       
                        {authenticated && <li className="nav-item"> <Link to="/mylogin" className='nav-link'>Login</Link></li>}
                        {authenticated &&<li className="nav-item"> <Link to="/myregister" className='nav-link'>Register</Link></li>}
                    
                        {!authenticated &&<li className="nav-item"> <Link to="/logout" className='nav-link'>Logout</Link></li>}
                       
                        
                        
                        
                        
                    </ul>
                </div>
            </div>
        </nav>
  )
}