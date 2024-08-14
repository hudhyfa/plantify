import React from "react";

interface ButtonProps {
    label: string;
    buttonColor?: string;
    textColor?: string;
    hoverColor?: string;
    hoverTextColor?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    label,
    buttonColor,
    textColor,
    hoverColor,
    hoverTextColor,
    onClick
}) => {
    return (
        <>
            <button
             className={`${buttonColor} ${textColor} ${hoverColor} ${hoverTextColor}
              px-3 md:px-4 py-2 md:py-3 rounded-md text-[0.75rem] md:text-[1rem] font-semibold
              transform hover:transition-all duration-[0.5s] ease-in-out
              `}
             onClick={onClick}
            >
                {label}
            </button>
        </>
    )
}

export default Button;