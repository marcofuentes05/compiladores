import * as React from "react";
import './styles.css'

interface ErrorsProps {
    errorsArray: string[]
}

export const Errors = (props: ErrorsProps) => {
    return (
        <div className="errors">
            {props.errorsArray.map(
                (error, index) => (
                    <p className="error">{index + 1} ~ {error}</p>
                )
            )}
        </div>
    )
}
