import * as React from 'react';
import { useState } from 'react';
import * as ReactDOM from 'react-dom';
import {setupLanguage} from "./yapl-lang/setup";
import { Editor } from './components/Editor/Editor';
import { Title } from './components/Title/title'
import { languageID } from './yapl-lang/config';
import { Button } from './components/Button/button';
import { DragDrop } from './components/DropZone/DropZone';
import './styles.css'
setupLanguage();
const App = () => {
    const [fileContent, setFileContent] = useState<string|null>(null);
    React.useEffect(() => {
        console.log("🚀 ~ file: index.tsx ~ line 14 ~ App ~ fileContent", fileContent)
    }, [fileContent])
return (<div>
    <Title />
    <div style={{display: 'flex'}}>
        <div className="left-column">
            <DragDrop setFileContentValue={setFileContent} />
        </div>
        <Editor language={languageID} fileContent={fileContent} />
    </div>
</div>)
}
ReactDOM.render(<App/>, document.getElementById('container'));
