import React from 'react';

function Button({ borderColor = '#000', textColor = '#000', text = '', className = '', ...props }) {
    return (
        <button
            className={`h-fit w-fit px-[27px] py-[16px] text-lg font-medium capitalize rounded-[100px] border ${className}`}
            style={{ borderColor: borderColor, color: textColor }}
            {...props}
        >
            {text}
        </button>
    );
}

export default Button; 