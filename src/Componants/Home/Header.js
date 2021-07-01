import React from 'react';
import "./Header.css"
import logo from '../../img/logo.png';

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
                            <li><a class="nav-link scrollto " href="#hero">Home</a></li>
                            <li><a class="nav-link scrollto" href="#about">About</a></li>
                            <li><a class="nav-link scrollto" href="#services">Services</a></li>
                            <li><a class="nav-link scrollto" href="#departments">Departments</a></li>
                            <li><a class="nav-link scrollto" href="#doctors">Doctors</a></li>
                            
                            <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                

                    <a href="#appointment" class="appointment-btn scrollto"><span class="d-none d-md-inline">Make an</span> Appointment</a>

                </div>
            </header>




        </div>
    );
};

export default Header;