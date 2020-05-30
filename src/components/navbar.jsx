import React, { Component } from "react";

const Navbar = ({ total }) => {
    return (
        <nav className="navbar navbar-light bg-light mb-4">
            <a href="#" className="navbar-brand">
                Navbar <span className="badge badge-pill badge-primary">{total}</span>
            </a>
        </nav>
    );
}
 
export default Navbar;