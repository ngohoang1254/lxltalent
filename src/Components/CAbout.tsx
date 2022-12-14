import React from "react";
import { useTranslation } from "react-i18next";
import { LikeOutlined, SafetyCertificateOutlined, HeartOutlined } from '@ant-design/icons';
import { Button } from "antd";
import insta1 from "../assets/talent/insta1.png";
import insta2 from "../assets/talent/insta2.png";
import insta3 from "../assets/talent/insta3.png";
import insta4 from "../assets/talent/insta4.png";
import insta5 from "../assets/talent/insta5.png";
import insta6 from "../assets/talent/insta6.png";
import insta7 from "../assets/talent/insta7.png";
import insta8 from "../assets/talent/insta8.png";
import insta9 from "../assets/talent/insta9.png";
import insta10 from "../assets/talent/insta10.png";
import insta11 from "../assets/talent/insta11.png";
import { useNavigate } from "react-router";
export default function About() {
    const { t } = useTranslation('');
    const navigate = useNavigate()
    return (
        <section id="about" style={{ backgroundColor: "white", padding: "30px 5px" }}>
            <div className="about-content" >
                <h2>Join the Lightricks creator community</h2>
                <span>See how the world's top creators maximize their online presence by creating your own Link in Bio page today. </span>
                <Button
                    onClick={() => {
                        navigate('/login')
                    }}
                    className="mt-4">
                    Get Started
                </Button>
            </div>
            <div className="about-insta">
                <img src={insta1} style={{ height: 390, width: "auto", padding: "0px 10px" }} />
                <img src={insta2} style={{ height: 390, width: "auto", padding: "0px 10px" }} />
                <img src={insta3} style={{ height: 390, width: "auto", padding: "0px 10px" }} />
                <img src={insta4} style={{ height: 390, width: "auto", padding: "0px 10px" }} />
                <img src={insta5} style={{ height: 390, width: "auto", padding: "0px 10px" }} />
                <img src={insta6} style={{ height: 390, width: "auto", padding: "0px 10px" }} />
                <img src={insta7} style={{ height: 390, width: "auto", padding: "0px 10px" }} />
                <img src={insta8} style={{ height: 390, width: "auto", padding: "0px 10px" }} />
                <img src={insta9} style={{ height: 390, width: "auto", padding: "0px 10px" }} />
                <img src={insta10} style={{ height: 390, width: "auto", padding: "0px 10px" }} />
                <img src={insta11} style={{ height: 390, width: "auto", padding: "0px 10px" }} />

            </div>
            {/* <h2 className="text-center fw-bold">T???I SAO CH???N CH??NG T??I?</h2>
            <div className="container row mx-auto">
                <div className="service__content flex-colum justify-content-center align-items-center text-center col-md-12 col-lg-4">
                    <LikeOutlined style={{ fontSize: 50, color: "#145f37", margin: '10px 0px' }} />
                    <h3 style={{ color: "#145f37" }} className="fw-bold">S???n ph???m an to??n</h3>
                    <p>N??ng tr???i vui v??? lu??n cam k???t n??i kh??ng v???i c??c lo???i h??a ch???t ?????c h???i, ch???t b???o qu???n v?? k??ch th??ch t??ng tr?????ng. C??y n???m khi ?????n tay ng?????i d??ng s??? lu??n ?????m b???o ???????c ch???t l?????ng v?? ????? an to??n cao nh???t. </p>
                </div>
                <div className="service__content flex-colum justify-content-center align-items-center text-center col-md-12 col-lg-4">
                    <SafetyCertificateOutlined style={{ fontSize: 50, color: "#145f37", margin: "10px 0px" }} />
                    <h3 style={{ color: "#145f37" }} className="fw-bold">Ngu???n cung ?????m b???o</h3>
                    <p>N??ng tr???i vui v??? l?? chu???i trang tr???i nu??i tr???ng v?? s???n xu???t n???m, lu??n ?????m b???o v??? s???n l?????ng cung ?????y ????? cho kh??ch h??ng doanh nghi???p. ??u ti??n h??ng ?????u v??? ch???t l?????ng v?? an to??n v??? sinh th???c ph???m </p>
                </div>
                <div className="service__content flex-colum justify-content-center align-items-center text-center col-md-12 col-lg-4">
                    <HeartOutlined style={{ fontSize: 50, color: "#145f37", margin: "10px 0px" }} />
                    <h3 style={{ color: "#145f37" }} className="fw-bold">??u ti??n s???c kh???e</h3>
                    <p>N??ng tr???i vui v??? lu??n ??u ti??n ch???n tr???ng v?? th????ng m???i c??c lo???i n???m ??n c?? ch???t l?????ng t???t nh???t, cung c???p nhi???u gi?? tr??? dinh d?????ng nh???t, ????? v???a ?????m b???o an to??n v???a t???i ??u cho s???c kh???e ng?????i d??ng. </p>
                </div>
            </div> */}
        </section>
    )
}