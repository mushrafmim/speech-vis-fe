import React, { ReactNode } from "react";

interface CardLayoutProp {
    title: string,
    children: ReactNode
}
const CardLayout: React.FC<CardLayoutProp> = ({ title, children }) => {
    return (
        <div
            className="m-8 w-80 h-80 bg-white p-4 shadow-lg"
        >
            <div className="text-primary font-bold mb-4">
                {title}
            </div>
            {children}
        </div>
    )
};

export default CardLayout;