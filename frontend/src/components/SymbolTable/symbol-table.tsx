import * as React from 'react';
import './styles.css';

export interface DataType {
    belongs: string;
    col: string;
    id: string;
    inherits: string;
    line: string;
    memory: string;
    position: string;
    scope: string;
    size: string;
    type: string;
    tipeParams: string;
    value: string;
}

interface SymbolTableProps {
    columns: (keyof DataType)[];
    data: DataType[];
}

export const SymbolTable = (props: SymbolTableProps) => {
    console.table(props.data)
    return (
        <>
            <div className="symbol-table-title">Symbol Table</div>
            <div className="table">
                <div className="headers">
                    {props.columns && props.columns.map((column, index) => <div key={index} className="element">{column}</div>)}
                </div>
                <div className="body">
                    {props.data.map((rowElement, rowIndex) => <div className="row">
                        {props.columns.map((columnName, columnIndex) => <div className="element" key={`${rowIndex}=${columnIndex}`}>{rowElement[columnName] || 'null'}</div>)}
                    </div>
                    
                    )}
                </div>
            </div>
        </>
       
    )
};
