import React from "react";
import author from "../assets/author.jpg";
import "./author.css";
import talent1 from "../assets/talent/talent1.png";
import talent2 from "../assets/talent/talent2.png";

import talent3 from "../assets/talent/talent3.png";

import talent4 from "../assets/talent/talent4.png";

import talent5 from "../assets/talent/talent5.png";

import talent6 from "../assets/talent/talent6.png";

import talent7 from "../assets/talent/talent7.png";

import talent8 from "../assets/talent/talent8.png";
import talent9 from "../assets/talent/talent9.png";
import { Button } from "antd";
export default function CAuthor() {
    return (

        <div id="header" className="d-flex align-items-center pt-5">
            <div className="headerContent">
                <h1>
                    LXTALENT
                </h1>
                <div style={{
                    fontSize: 48,
                    fontWeight: 700,
                    textAlign: "center"
                }}>
                    Maximize your online presence
                </div>
                <div style={{
                    fontSize: 24,
                    fontWeight: 500,
                    textAlign: "center"
                }}>
                    Own your personal brand with a free Link in Bio page
                </div>
                <Button className="mt-4">
                    Get Started
                </Button>
                <div className="sliderHeader"
                    style={{
                        cursor: "move",
                        overflow: "scroll"
                    }}
                >
                    <img
                        src={talent1}
                        style={{
                            height: 500,
                        }}
                    />
                    <img
                        src={talent2}
                        style={{
                            height: 500,
                        }}
                    />
                    <img
                        src={talent3}
                        style={{
                            height: 500,
                        }}
                    />
                    <img
                        src={talent4}
                        style={{
                            height: 500,
                        }}
                    />
                    <img
                        src={talent5}
                        style={{
                            height: 500,
                        }}
                    />
                    <img
                        src={talent6}
                        style={{
                            height: 500,
                        }}
                    />
                    <img
                        src={talent7}
                        style={{
                            height: 500,
                        }}
                    />
                    <img
                        src={talent8}
                        style={{
                            height: 500,
                        }}
                    />
                    <img
                        src={talent9}
                        style={{
                            height: 500,
                        }}
                    />

                </div>
            </div>
        </div >
    )
}