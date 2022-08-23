import * as React from 'react';
import './styles.css'

interface ButtonProps {
    text: string;
}
export const Button = (props: ButtonProps) => {
    return <div className="button">
        <p>{props.text}</p>
    </div>
}
