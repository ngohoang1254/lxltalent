import React from "react";
import processImg from "../assets/quytrinh.jpg";
export default function CProcess() {
    return (
        <div style={{ background: "#f7f8fa", padding: "30px 0px" }}>
            <div className="container row mx-auto">
                <img
                    // style={{ maxWidth: 400 }}
                    className="col-12 col-md-6"
                    src={processImg} />
                <div
                    className="col-12 col-md-6"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                    }}>
                    <h4 className="text-center fw-bold">TỪ NÔNG TRẠI ĐẾN BÀN ĂN</h4>
                    <p>
                        Để khách hàng có thể dễ dàng tiếp cận nấm chuẩn tươi sạch trực tiếp từ <span className="fw-bold">Nông trại vui vẻ</span>, mỗi ngày nấm tươi đều được vận chuyển thẳng từ trại nấm - cửa hàng chính - khách hàng để nấm luôn tươi mới và đạt giá trị dinh dưỡng tốt nhất cho sức khỏe.Giúp mỗi khách hàng luôn an tâm để chế biến 1001 món ăn ngon cho gia đình.
                    </p>
                    <p>
                        Bên cạnh đó, <span className="fw-bold">Nông trại vui vẻ</span> còn có các loại nấm khô, bột nấm, nấm lon cực tiện lợi cho quá trình sử dụng, bảo quản và di chuyển.Tiêu chí mang đến trải nghiệm thuận lợi và tiết kiệm nhất cho nhu cầu thiết yếu hàng ngày của tất cả khách hàng.
                    </p>
                </div>
            </div>
        </div>

    )
}