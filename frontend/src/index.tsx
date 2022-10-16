import * as React from 'react';
import { useState, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import {setupLanguage} from "./yapl-lang/setup";
import { Editor } from './components/Editor/Editor';
import { Title } from './components/Title/title'
import { languageID } from './yapl-lang/config';
import { Button } from './components/Button/button';
import { FileImporter } from './components/DropZone/DropZone';
import { onClickCompile } from './utils';
import './styles.css'
import { Errors } from './components/Errors';
import {SymbolTable, DataType} from './components/SymbolTable/symbol-table';
import {ThreeWayCode} from "./components/ThreeWayCode/three-way-code";

setupLanguage();
const App = () => {
    const [fileContent, setFileContent] = useState<string|null>(null);
    const [editor, setEditor] = useState(null);
    const [isCompiling, setIsCompiling] = useState<boolean>(false);
    const [errors, setErrors] = useState<string[]>()
    const [symbolTable, setSymbolTable] = useState<DataType[]>();
    const [threeWayCode, setThreeWayCode] = useState<string[]>([]);
    const [isErrorsCollapsed, setIsErrorCollapsed] = useState<boolean>(false);
return (
    <div>
        <Title />
        <div style={{display: 'flex'}}>
            <Editor
                language={languageID}

                fileContent={fileContent}
                onFileContentChange={setFileContent}
                editor={editor}
                setEditor={setEditor}
            />
            <div className="right-column">
                <div className="buttons">
                    <FileImporter setFileContentValue={setFileContent} />
                    <Button text="Compilar" onClick={() => {
                        setErrors([]);
                        onClickCompile(editor, setIsCompiling, setErrors, setSymbolTable, setThreeWayCode);
                    }} />
                </div>
                <div className="columns">
                    <ThreeWayCode threeWayCode={threeWayCode} />
                    {/*@ts-ignore */}
                    {symbolTable && <SymbolTable data={symbolTable} columns={Object.keys(symbolTable[0])} />}
                </div>
                <Errors isClosed={isErrorsCollapsed} onToggle={()=>setIsErrorCollapsed(!isErrorsCollapsed)} errorsArray={errors} />
            </div>
        </div>
    </div>
);
}
ReactDOM.render(<App/>, document.getElementById('container'));
