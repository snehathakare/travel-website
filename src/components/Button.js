import React from 'react'
import { Link } from "react-router-dom";
import './button.css'

const STYLES = ['btn-primary', 'btn-outline']
const SIZES = ['btn-medium', 'btn-large']


export const Button =({
children,
type,
buttonStyle,
buttonSize, 
Onclick}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize)? buttonSize : SIZES[0]

    return (
        <Link>
        <button
        className = {`btn ${checkButtonSize} ${checkButtonStyle}`}
        >
            {children}
            </button>
        </Link>
    );
}



