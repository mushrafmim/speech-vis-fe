import React, { ReactNode, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import Spinner from "../components/Spinner";

interface CardLayoutProp {
    title: string,
    children: ReactNode
}

const CardLayout: React.FC<CardLayoutProp> = ({ title, children }) => {
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000)
    }, [])

    return (
        <div
            className="m-8 w-96 h-80 bg-white p-4 shadow-lg"
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