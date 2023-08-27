import React from "react";

interface ButtonProps {
    text: string;
    disabled: boolean;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, disabled, onClick }) => {

    return (
        <button
            onClick={onClick}
            className={`${disabled ? `bg-slate-300 text-white` : `bg-primary text-white`} p-2 w-24 rounded-lg`}
            disabled={disabled ? true : false}
        >
            {text}
        </button>
    )
};

export default Button;