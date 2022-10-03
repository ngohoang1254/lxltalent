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
            {/* <h2 className="text-center fw-bold">TẠI SAO CHỌN CHÚNG TÔI?</h2>
            <div className="container row mx-auto">
                <div className="service__content flex-colum justify-content-center align-items-center text-center col-md-12 col-lg-4">
                    <LikeOutlined style={{ fontSize: 50, color: "#145f37", margin: '10px 0px' }} />
                    <h3 style={{ color: "#145f37" }} className="fw-bold">Sản phẩm an toàn</h3>
                    <p>Nông trại vui vẻ luôn cam kết nói không với các loại hóa chất độc hại, chất bảo quản và kích thích tăng trưởng. Cây nấm khi đến tay người dùng sẽ luôn đảm bảo được chất lượng và độ an toàn cao nhất. </p>
                </div>
                <div className="service__content flex-colum justify-content-center align-items-center text-center col-md-12 col-lg-4">
                    <SafetyCertificateOutlined style={{ fontSize: 50, color: "#145f37", margin: "10px 0px" }} />
                    <h3 style={{ color: "#145f37" }} className="fw-bold">Nguồn cung đảm bảo</h3>
                    <p>Nông trại vui vẻ là chuỗi trang trại nuôi trồng và sản xuất nấm, luôn đảm bảo về sản lượng cung đầy đủ cho khách hàng doanh nghiệp. Ưu tiên hàng đầu về chất lượng và an toàn vệ sinh thực phẩm </p>
                </div>
                <div className="service__content flex-colum justify-content-center align-items-center text-center col-md-12 col-lg-4">
                    <HeartOutlined style={{ fontSize: 50, color: "#145f37", margin: "10px 0px" }} />
                    <h3 style={{ color: "#145f37" }} className="fw-bold">Ưu tiên sức khỏe</h3>
                    <p>Nông trại vui vẻ luôn ưu tiên chọn trồng và thương mại các loại nấm ăn có chất lượng tốt nhất, cung cấp nhiều giá trị dinh dưỡng nhất, để vừa đảm bảo an toàn vừa tối ưu cho sức khỏe người dùng. </p>
                </div>
            </div> */}
        </section>
    )
}