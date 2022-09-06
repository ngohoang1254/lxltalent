import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg"
import { useTranslation } from "react-i18next";
import { Drawer, Tooltip, Button } from "antd";
import "./header.css";



export default function CHeader() {
    const { t, i18n } = useTranslation('');
    const [language, setLanguage] = useState('vi');
    const changeLanguage = (event: any) => {
        setLanguage(event.target.value)
        i18n.changeLanguage(event.target.value);
    };

    const [visible, setVisbile] = useState(false);
    return (
        <>
        </>
    )
}