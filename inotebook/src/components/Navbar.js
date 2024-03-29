import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login')
  }
  let location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-lg-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          iNotebook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem('token') ? <form className="d-flex" role="search">
            <Link to="/login" className="btn btn-outline-info mx-1">Login</Link>
            <Link to="/signup" className="btn btn-outline-success mx-1">Sign up</Link>
          </form> : <>
            <Link to="/userInfo" className="mx-4 border-4 rounded-circle border-success"><i className="fa-solid fa-user"></i></Link>
            <button type="button" onClick={handleLogout} className="btn btn-outline-success mx-1">Logout</button>
          </>
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
