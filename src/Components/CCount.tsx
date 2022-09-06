import React from "react";
import CountUp from 'react-countup';
import { useTranslation } from "react-i18next";
import "./count.css";
export default function Count() {
    const {t} = useTranslation('');
    return (
        <section id="counts" className="counts">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="bi bi-emoji-smile"></i>
                            {/* <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span> */}
                            <CountUp
                                start={0}
                                end={233}
                                duration={2.5}
                            />
                            <p>{t("home.customers")}</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                            <i className="bi bi-journal-richtext"></i>
                            <CountUp
                                start={0}
                                end={521}
                                duration={2.5}
                            />
                            <p>{t("home.projects")}</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="bi bi-headset"></i>
                            <CountUp
                                start={0}
                                end={3000}
                                duration={2.5}
                            />
                            <p>{t("home.customerSupport")}</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="bi bi-people"></i>
                            <CountUp
                                start={0}
                                end={2500}
                                duration={2.5}
                            />
                            <p>{t("home.staffs")}</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}