import * as React from 'react';
import './styles.css';

interface SymbolTableProps {
    columns: string[];
    data: Object[];
}

export const SymbolTable = (props: SymbolTableProps) => {
    return (
        <>
            <div className="title"></div>
            <div className="table">
                <div className="headers">
                    {props.columns.map(column => <span className="header">{column}</span>)}
                </div>
            </div>
        </>
       
    )
};
