import React from "react";
import CHeader from "./CHeader";
import CFooter from "./CFooter";
interface TemplateProps {
    children: React.ReactNode
}
export default function Template({ children, ...rest }: TemplateProps) {
    return (
        <>
            <CHeader />
            {children}
            {/* <CFooter /> */}
        </>
    )
}