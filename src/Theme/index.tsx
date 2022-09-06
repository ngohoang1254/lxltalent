import React from "react";
import CHeader from "../Components/CHeader";
import CFooter from "../Components/CFooter";
export default function Theme(children: React.ReactNode): JSX.Element {
    return (
        <>
            <CHeader />
                {children}
            <CFooter />
        </>
    )
}