import React from "react";
import { useTranslation } from "react-i18next";
import CCustomer from "../Components/CCustomer";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { Autoplay, EffectFade } from "swiper";
import backGround1 from "../assets/workspace1.jpg";
import backGround2 from "../assets/workspace2.jpg"
import mushroom from "../assets/mushroom.jpg";
import CForm from "../Components/CForm";
import CAuthor from "../Components/CAuthor";
import CAbout from "../Components/CAbout";
import CCount from "../Components/CCount";
import CFooter from "../Components/CFooter";
import CServices from "../Components/CServices";
import "./index.css";
import CProcess from "../Components/CProcess";
export default function Home() {
    return (
        <>
            <div className="main">
                <CAuthor />
                <CAbout />
                {/* 
                <CCustomer />
                <CProcess /> */}
                {/* <CForm /> */}
                {/* <CCount />
                <CServices />
                */}
                <CFooter />
                {/* <div
                    className='d-lg-block d-none'
                    style={{
                        position: "absolute",
                        top: 460,
                        zIndex: 100,
                        right: 0,
                    }}>
                    <img src={mushroom}
                        style={{
                            width: "80%",
                            height: "80%"
                        }}
                        alt=""
                    />
                </div> */}
            </div>
        </>
    )
}