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

setupLanguage();
const App = () => {
    const [fileContent, setFileContent] = useState<string|null>(null);
    const [editor, setEditor] = useState(null);
    const [isCompiling, setIsCompiling] = useState<boolean>(false);
    const [errors, setErrors] = useState<string[]>()
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
                <FileImporter setFileContentValue={setFileContent} />
                <Button text="Compilar" onClick={() => {
                    setErrors([]);
                    onClickCompile(editor, setIsCompiling, setErrors);
                }} />
                <Errors errorsArray={errors} />
            </div>
        </div>
    </div>
);
}
ReactDOM.render(<App/>, document.getElementById('container'));
