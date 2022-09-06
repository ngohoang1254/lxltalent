import React from "react";
import { useTranslation } from "react-i18next";
import "./service.css";
import Mushroom from "../assets/mushroom-1.png"
export default function Service() {
    const { t } = useTranslation('');
    return (
        <section id="benefits" className="services py-5" style={{ backgroundColor: "white" }}>
            <h1 className="text-center mb-5">LỢI ÍCH CỦA NẤM SẠCH</h1>
            <div className="container row mx-auto">
                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column order-1 order-lg-0 mt-5 mt-lg-0">
                    <div className="benefit-columns d-flex">
                        <div className="circle order-0 order-lg-1">
                            <span>1</span>
                        </div>
                        <div className="benefit-contents text-start text-lg-end">
                            <p className="fw-bold">Giàu vitamin và khoáng chất</p>
                            <p>Nấm là thực phẩm giàu dinh dưỡng, là một nguồn chất xơ, protein và chất chống ôxy hóa dồi dào, ít calo</p>
                        </div>
                    </div>
                    <div className="benefit-columns d-flex">
                        <div className="circle order-0 order-lg-1">
                            <span>2</span>
                        </div>
                        <div className="benefit-contents text-start text-lg-end">
                            <p className="fw-bold">Bảo vệ tim</p>
                            <p>Nấm làm giảm cholesterol và giúp giảm cân.Nấm cũng giúp điều hòa mức huyết áp và thúc đẩy sự lưu thông máu. Điều này rất tốt cho tim</p>
                        </div>
                    </div>
                    <div className="benefit-columns d-flex">
                        <div className="circle order-0 order-lg-1">
                            <span>3</span>
                        </div>
                        <div className="benefit-contents text-start text-lg-end">
                            <p className="fw-bold">Chống ung thư</p>
                            <p>Một số loại nấm có đặc tính chống ung thư tuyệt vời. Ăn nấm thường xuyên giúp bảo vệ các tế bào của bạn chống lại nguy cơ tổn hại ADN.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 d-flex flex-column order-0 order-lg-1">
                    <img src={Mushroom}
                        style={{
                            borderRadius: "50%"
                        }}
                        alt=""
                    />
                </div>
                <div className="col-12 col-md-6 col-lg-4 d-flex flex-column order-2 order-lg-2 mt-5 mt-lg-0">
                    <div className="benefit-columns d-flex">
                        <div className="circle">
                            <span>4</span>
                        </div>
                        <div className="benefit-contents">
                            <p className="fw-bold">Chống lão hóa</p>
                            <p>Nấm chứa nhiều ergothioneine và glutathione, những chất chống ô xy hóa giúp cải thiện sức khỏe và chống lão hóa.</p>
                        </div>
                    </div>

                    <div className="benefit-columns d-flex justify-content-center">
                        <div className="circle">
                            <span>5</span>
                        </div>
                        <div className="benefit-contents">
                            <p className="fw-bold">Giảm cân</p>
                            <p>Nấm có hàm lượng calorie thấp và chất dinh dưỡng cao. Loại thực phẩm này rất giàu chất xơ, beta-glucan và chitin, tạo cảm giác no và kiềm chế cơn đói.</p>
                        </div>
                    </div>
                    <div className="benefit-columns d-flex justify-content-center">
                        <div className="circle">
                            <span>6</span>
                        </div>
                        <div className="benefit-contents">
                            <p className="fw-bold">Tăng cường khả năng miễn dịch</p>
                            <p>Không chỉ giúp giảm cân, chất beta-glucan, vốn hiện diện trong nhiều loại nấm, còn có tác dụng tăng cường khả năng miễn dịch của bạn</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}