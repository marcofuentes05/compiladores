import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {setupLanguage} from "./yapl-lang/setup";
import { Editor } from './components/Editor/Editor';
import { Title } from './components/Title/title'
import { languageID } from './yapl-lang/config';
import { Button } from './components/Button/button';
import { DragDrop } from './components/DropZone/DropZone';

setupLanguage();
const App = () => 
<div>
    <Title />
    <div style={{display: 'flex'}}>
        <div style={{width: '50vw'}}>
            <Button text="Compilar" />
            <Button text="Compilar" />
            <Button text="Compilar" />
            <DragDrop />
        </div>
        <Editor language={languageID}></Editor>;
    </div>
</div>

ReactDOM.render(<App/>, document.getElementById('container'));
