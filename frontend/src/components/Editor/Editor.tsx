
import * as React from 'react';
import { useEffect, useState} from 'react';
import * as monaco from 'monaco-editor-core';
import { parseAndGetASTRoot } from '../../language-service/parser';
import './styles.css'

interface IEditorPorps {
    language: string;
    fileContent: string;
    editor: monaco.editor.IStandaloneCodeEditor | null;
    setEditor: (editor: monaco.editor.IStandaloneCodeEditor) => void;
    onFileContentChange: (newContent) => void;
}

export const Editor: React.FC<IEditorPorps> = (props: IEditorPorps) => {
    let divNode;
    const assignRef = React.useCallback((node) => {
        // On mount get the ref of the div and assign it the divNode
        divNode = node;
    }, []);

    // const [editor, setEditor] = useState(null)

    useEffect(() => {
        if (divNode) {
            props.setEditor(monaco.editor.create(divNode, {
                language: props.language,
                minimap: { enabled: true },
                autoIndent: true,
                theme: 'vs-dark'
            }));
        }
        console.log(parseAndGetASTRoot(`
        class Silly {
            copy() : SELF_TYPE { self };
        };
        
        class Sally inherits Silly { };
        
        class Main {
            x : Sally <- (new Sally).copy();
            main() : Sally { x };
        };`))
    }, [assignRef])

    useEffect(() => {
        if (props.editor && props.fileContent) {
            props.editor.getModel().setValue(props.fileContent);
        }
    }, [props.fileContent])

    return <div ref={assignRef} className='editor' style={{ height: '90vh' }}></div>;
}
