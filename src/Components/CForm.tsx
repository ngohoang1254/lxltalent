import React from "react";
import author from "../assets/author.jpg";
import { Input } from "antd";
export default function CForm() {
    return (
        <div id="form">
            <div className="form-content d-flex flex-column justify-content-center align-items-center">
                <h1>Đăng ký bản tin</h1>
                <p>Ưu tiên nhận các bài chia sẻ, giá nấm và sự kiện nhận voucher giảm giá mới nhất từ Nấm Xanh.</p>
                <div className="d-flex justify-content-center form-input">
                    <Input placeholder="Tên của bạn" />
                    <Input placeholder="Email của bạn" />
                </div>
                <button>Đăng ký</button>
            </div>
        </div>
    )
}