import * as React from "react";
import './styles.css'

interface ErrorsProps {
    errorsArray: string[]|null;
}

export const Errors = (props: ErrorsProps) => {
    return (
        <div className="errors">
            {props.errorsArray && props.errorsArray.map(
                (error, index) => (
                    <p className="error">{index + 1} ~ {error}</p>
                )
            )}
            {props.errorsArray && props.errorsArray.length === 0 && <p className="good">Valid input</p>}
        </div>
    )
}
