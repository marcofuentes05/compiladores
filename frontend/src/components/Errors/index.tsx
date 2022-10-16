import * as React from "react";
import './styles.css'

interface ErrorsProps {
    errorsArray: string[]|null;
    isClosed: boolean;
    onToggle: () => void;
}

export const Errors = (props: ErrorsProps) => {
    return (
        <>
            <div className={`${props.isClosed ? 'collapsed' : 'errors'}`}>
                <div className="close" onClick={props.onToggle} />
                {props.errorsArray && props.errorsArray.map(
                    (error, index) => (
                        <p className="error">{index + 1} ~ {error}</p>
                    )
                )}
                {props.errorsArray && props.errorsArray.length === 0 && <p className="good">Valid input</p>}
            </div>
        {props.isClosed && (
                <div className="open">
                    <div className="open-button" onClick={props.onToggle}>^</div>
                </div>
        )}
        </>
    )
}
