import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper-bundle.min.css";
import { Pagination } from "swiper";
// import "../assets/css/question.css";

export default function Student() {
    return (
        <div className="w-full py-5">
            <div className="container">
                <h2 className="text-center">
                    Cảm nhận khách hàng
                </h2>
                <Swiper
                    style={{ paddingBottom: 50 }}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        1240: {
                            slidesPerView: 3,
                        },
                    }}
                    modules={[Pagination]}
                >
                    {initData.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div
                                    className="d-flex justify-content-center align-items-center flex-column mx-4"
                                    style={{ height: 250 }}
                                >
                                    {/* <div>
                                <BookOpenIcon
                                    height={25}
                                    width={25}
                                    style={{ marginBottom: 25 }}
                                />
                                </div> */}
                                    <div
                                        className="mb-2 w-full"
                                        style={{
                                            textAlign: "center",
                                            maxHeight: 120,
                                            overflow: "hidden !important",
                                            fontStyle: "italic"
                                        }}
                                    >
                                        {item.comment}
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginTop: "auto",
                                        }}
                                    >
                                        <img
                                            src={item.avatar}
                                            style={{
                                                height: 40,
                                                width: 40,
                                                borderRadius: "50%",
                                                border: "1px solid yellow",
                                            }}
                                            alt=""
                                        />
                                        <span className="font-bold font-size text-normal mt-2">
                                            {item.name}
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export const initData = [
    {
        id: 1,
        name: "Ngô Hoàng",
        comment: "Em là một cô gái thích ăn nấm và ăn chay mỗi khi thích. Thông qua một người anh giới thiệu mà em đã biết đến Nông trại vui vẻ, em thường xuyên đặt nấm tươi ở đây vì nấm thực sự ngon hơn và tươi hơn siêu thị khá nhiều bởi nghe nói từ nông trại luôn. Mặc dù nông sản không phải lúc nào cũng toàn vẹn 100%, nhưng em thích cách làm việc có tâm của Nông trại vui vẻ.",
        avatar: "https://tse4.mm.bing.net/th?id=OIP.ZT-Tw8tYy38htqch69vsGQAAAA&pid=Api&P=0&w=174&h=174"
    },
    {
        id: 2,
        name: "Ngô Hoàng",
        comment: "1 năm nay mình chuyển sang chế độ ăn giảm thiểu động vật. Nhờ làm nông sản nên mình biết Nông trại vui vẻ và là khách hàng thường xuyên với các món nấm tươi. Mình rất vui khi được là một trong những người đầu tiên thử món Chà Bông Nấm Hương này. Chắc chắn mình sẽ mua thêm vì ngon hơn mong đợi.",
        avatar: "https://tse4.mm.bing.net/th?id=OIP.ZT-Tw8tYy38htqch69vsGQAAAA&pid=Api&P=0&w=174&h=174",
    },
    {
        id: 3,
        name: "Ngô Hoàng",
        comment: "Cô thường hay bị đau đầu và mệt mỏi do buôn bán ở cửa hàng cả ngày, có hôm con trai cô có mua Bào Tử Nấm Linh Chi về cho bố mẹ cùng dùng. Mấy ngày đầu hơi uể oải, buồn ngủ, nhưng vài ngày kế thì bắt đầu cảm thấy như có thêm năng lượng, giảm mệt mỏi, ăn ngon ngủ khỏe hơn nhiều so và ít bệnh vặt hơn so với trước kia. Cô cảm ơn Nông trại vui vẻ.",
        avatar: "https://tse4.mm.bing.net/th?id=OIP.ZT-Tw8tYy38htqch69vsGQAAAA&pid=Api&P=0&w=174&h=174",
    },
    {
        id: 4,
        name: "Ngô Hoàng",
        comment: "Mình đã lấy Chà Bông Nấm Hương ăn cùng cơm, nhắm rượu và ăn vặt trong ca trực thì lúc nào cũng hợp. Mình thích vị Rong Biển nhất và hi vọng lần ra mắt sau, Nông trại vui vẻ sẽ có phiên bản cay hơn.",
        avatar: "https://tse4.mm.bing.net/th?id=OIP.ZT-Tw8tYy38htqch69vsGQAAAA&pid=Api&P=0&w=174&h=174",
    },
];
