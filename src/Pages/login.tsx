import React from "react";
import LoginBg from "../assets/talent/login.png";
import "./login.css"
import { MailOutlined, GoogleOutlined, FacebookOutlined, AppleOutlined } from '@ant-design/icons';

export default function Login() {
    return (
        <div style={{
            display: "flex"
        }}>
            <div
                className="leftLogin"
                style={{
                    width: "50%",
                    backgroundColor: "#94ecff33",
                    minHeight: "100vh",
                }}>

            </div>
            <div style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",

            }}
                className="rightLogin"
            >
                <h1>Sign In</h1>
                <button style={{
                }}>
                    <MailOutlined style={{ fontSize: 20 }} />
                    <span style={{
                        marginLeft: 10
                    }}>Continue with email </span>
                </button>
                <button>
                    <GoogleOutlined style={{ fontSize: 20 }} />
                    <span style={{
                        marginLeft: 10
                    }}>Continue with Google </span>
                </button>
                <button>
                    <FacebookOutlined style={{ fontSize: 20 }} />
                    <span style={{
                        marginLeft: 10
                    }}>Continue with Facebook </span>
                </button>
                <button>
                    <AppleOutlined style={{ fontSize: 25 }} />
                    <span style={{
                        marginLeft: 10
                    }}>Continue with Apple </span>
                </button>
            </div>
        </div>
    )
}
