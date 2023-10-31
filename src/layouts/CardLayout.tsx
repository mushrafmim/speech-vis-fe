import React, { ReactNode } from "react";
import Spinner from "../components/Spinner";

interface CardLayoutProp {
    title: string,
    children: ReactNode,
    isLoading: boolean,
    props?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

const CardLayout: React.FC<CardLayoutProp> = ({ title, isLoading, children, ...props }) => {

    return (
        <div
            className={`h-80 flex-1 min-w-[350px] bg-background p-4 shadow-lg text-primaryText flex-grow`}
            {...props}
        >
            <div className="text-buttonBackground font-bold mb-4 uppercase">
                {title}
            </div>
            {isLoading ?
                <div className="flex-justify-center items-center">
                    <Spinner />
                </div> :
                children}
        </div>
    )
};

export default CardLayout;