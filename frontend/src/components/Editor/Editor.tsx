
import * as React from 'react';
import { useEffect, useState} from 'react';
import * as monaco from 'monaco-editor-core';
import './styles.css'

interface IEditorPorps {
    language: string;
    fileContent: string;
}

export const Editor: React.FC<IEditorPorps> = (props: IEditorPorps) => {
    console.log("🚀 ~ file: Editor.tsx ~ line 13 ~ props", props)
    let divNode;
    const assignRef = React.useCallback((node) => {
        // On mount get the ref of the div and assign it the divNode
        divNode = node;
    }, []);

    const [editor, setEditor] = useState(null)

    useEffect(() => {
        if (divNode) {
            setEditor(monaco.editor.create(divNode, {
                language: props.language,
                minimap: { enabled: false },
                autoIndent: true
            }));
        }
    }, [assignRef])

    useEffect(() => {
        if (editor && props.fileContent) {
            console.log("🚀 ~ file: Editor.tsx ~ line 33 ~ useEffect ~ props.fileContent", props.fileContent)
            editor.getModel().setValue(props.fileContent);
        }
    }, [props.fileContent])

    return <div ref={assignRef} className='editor' style={{ height: '90vh' }}></div>;
}
