import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/index";
import Recruitment from "../Pages/recruitment";

export default function nopCMainRouter(): JSX.Element {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/hoat-dong-kinh-doanh" element={<Business />} /> */}
            <Route path="/tuyen-dung" element={<Recruitment />} />
        </Routes>
    )
}