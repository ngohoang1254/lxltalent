import React from "react";
export interface RouterItem{
    path : string,
    component : React.ComponentClass | React.FunctionComponent;
    
    noExact ?: boolean;

    isPrivate ?: boolean
}