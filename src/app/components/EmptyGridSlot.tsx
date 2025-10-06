"use client";

import React from "react"

const EmptyGridSlot = ({
    width = "150px",
    height = "150px"
}) => {

    const slotClasses = `
        border-2
        border-dotted
        border-gray-400
        rounded-lg
        flex
        justify-center
        items-center
    `

    return (
        <div
            className={ slotClasses }
            style={{ width: width, height: height}}
            >
        
        </div>
    );
};

export default EmptyGridSlot;