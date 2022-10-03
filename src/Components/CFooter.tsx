import React from "react";
import Logo from "../assets/talent/logo.png"
import flycamImage from "../assets/flycam.jpeg";
const iframStyle = {
    boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "10px",
    width: "100%"
}

export default function Footer() {
    return (
        <>
            <footer id="footer" style={{
                backgroundColor: "black"
            }}>
                <div className="footer-top">
                    <div className="container">
                        {/* <div className="row">
                            <h3>Thông tin liên hệ</h3>
                        </div> */}
                        {/* style={{"justifyContent":"center"}} */}
                        <div className="row" >

                            {/* <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div> */}

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4
                                    style={{
                                        color: '#737373',
                                    }}
                                >
                                    Our Social Networks</h4>
                                <div className="social-links mt-3">
                                    <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="/" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <span style={{
                                    fontSize: 50,
                                    color: "white",
                                    fontFamily: "Megrim",
                                }}>TALENT TV</span>
                            </div>
                            {/* <div style={{ "width": "100%" }}>
                                <img src={flycamImage} style={{ width: "100%" }} />
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}