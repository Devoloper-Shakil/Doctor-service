import React from 'react';
import "./Header.css"
import logo from '../../img/logo.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>


            {/* Header */}
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    <a href="index.html" class="logo me-auto"><img src={logo} alt="" /></a>
                    {/* Uncomment below if you prefer to use an image logo  */}
                    {/* <h1 class="logo me-auto"><a href="index.html">Medicio</a></h1> */}

                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <li><Link class="nav-link scrollto " to="home">Home</Link></li>
                            <li><Link class="nav-link scrollto" to="about">About</Link></li>
                            <li><Link class="nav-link scrollto" to="services">Services</Link></li>
                            <li><Link class="nav-link scrollto" to="departments">Departments</Link></li>
                            <li><Link class="nav-link scrollto" to="doctors">Doctors</Link></li>
                            
                            <li><Link class="nav-link scrollto" to="contact">Contact</Link></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                

                    <Link to="appointment" class="appointment-btn scrollto"><span class="d-none d-md-inline">Make an</span> Appointment</Link>

                </div>
            </header>




        </div>
    );
};

export default Header;