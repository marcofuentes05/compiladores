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
    return (
        <div className="symbol-table">
            <div className="symbol-table-title">Symbol Table</div>
            <div className="body">
                <div className="row headers">
                    {props.columns && props.columns.map((column, index) => <div key={index} className="element header">{column}</div>)}
                </div>
                {props.data.map((rowElement, rowIndex) => <div className="row">
                    {props.columns.map((columnName, columnIndex) => <div className="element" key={`${rowIndex}=${columnIndex}`}>{rowElement[columnName] || 'null'}</div>)}
                </div>
                
                )}
            </div>
        </div>
       
    )
};
