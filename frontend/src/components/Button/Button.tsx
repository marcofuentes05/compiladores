import * as React from 'react';
import './styles.css'

interface ButtonProps {
    text: string;
    onClick: () => void|Promise<void>;
}
export const Button = (props: ButtonProps) => {
    return <div className="button" onClick={props.onClick}>
        <p>{props.text}</p>
    </div>
}
