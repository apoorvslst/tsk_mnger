import React from 'react';

import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div
          className="container-fluid"
          style={{
            borderRadius: "10px",
            backgroundColor: "#f8f9fa", // light background
            padding: "10px 20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)" // optional for better look
          }}
        >
          <a className="navbar-brand" href="#">TaskZee</a>
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
                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Newtasks" className="nav-link" >Add New Task</Link>
              </li>
              <li className="nav-item">
                <Link to="/Tasklist" className="nav-link">Task List</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

