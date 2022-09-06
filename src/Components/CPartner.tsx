import React from "react";
import partner1 from "../assets/dsadas.png";
import partner2 from "../assets/nextmedia.png"
import partner4 from "../assets/nkt.png";
import partner3 from "../assets/riav.png"
import partner5 from "../assets/dienquan.png";
export default function Partner() {
    return (
        <section id="clients" className="clients section-bg">
            <div className="container" data-aos="zoom-in">

                <div className="row">

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={partner1} className="img-fluid" alt="" />
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={partner2} className="img-fluid" alt="" />
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={partner3} className="img-fluid" alt="" />
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={partner4} className="img-fluid" alt="" />
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src={partner5} className="img-fluid" alt="" />
                    </div>

                    <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                        <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
                    </div>

                </div>

            </div>
        </section>
    )
}