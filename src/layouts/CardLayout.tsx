import React, { ReactNode, useEffect } from "react";
import Spinner from "../components/Spinner";

interface CardLayoutProp {
    title: string,
    children: ReactNode,
    width_factor: number,
    props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

const CardLayout: React.FC<CardLayoutProp> = ({ title, children, width_factor = 1, ...props }) => {
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, [])

    return (
        <div
            className={`m-2 h-80 bg-white p-4 shadow-lg flex-grow`}
            {...props}
        >
            <div className="text-primary font-bold mb-4 uppercase">
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