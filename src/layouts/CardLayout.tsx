import React, { ReactNode, useEffect } from "react";
import Spinner from "../components/Spinner";

interface CardLayoutProp {
    title: string,
    children: ReactNode,
    props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
}

const CardLayout: React.FC<CardLayoutProp> = ({ title, children, ...props }) => {
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, [])

    return (
        <div
            className="m-8 w-96 h-80 bg-white p-4 shadow-lg"
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