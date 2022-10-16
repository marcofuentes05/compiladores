import * as React from 'react';
import './styles.css'

interface ThreeWayCodeProps {
    threeWayCode: string[];
}

export const ThreeWayCode = (props: ThreeWayCodeProps) => {
    return <div className="three-way-code">
        <div className="three-way-code-title">
            Three Way Code
        </div>
        {props.threeWayCode.map(element => (
                <p className="triplet">{element}</p>
        ))}
    </div>
}