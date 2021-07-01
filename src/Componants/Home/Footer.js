import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-info">
                                    <h3>Medicio</h3>
                                    <p>
                                        A108 Adam Street <br />
                                        NY  NY 535022, USA<br></br>
                                        <strong>Phone:</strong> +1 5589 55488 55 <br />
                                        <strong>Email:</strong> info@example.com<br />
                                    </p>
                                    <div class="social-links mt-3">
                                        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                                        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                                        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                                        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                                        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Lorem Ipsum</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Dolor Sitema</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Sed ut perspiciatis</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Magni Dolores</a></li>
                                    <li><i class="bx bx-chevron-right"></i> <a href="#">Nemo Enim</a></li>
                                </ul>
                            </div>
                          <div class="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" value="Subscribe" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="copyright">
                        &copy; Copyright <strong><span>Medicio</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">

                        Designed by <a href="https://shakil-hasan.netlify.app/">Shakil hasan</a>
                    </div>
                </div>
            </footer>



        </div>

    );
};

export default Footer;