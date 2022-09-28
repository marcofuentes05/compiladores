

export const onClickCompile = async (editor, setIsCompiling, setErrors, setSymbolTable) => {
    setIsCompiling(true);
    const editorValue = editor && editor.getModel() ? editor.getModel().getValue() : '';
    const body = new FormData();
    body.append('program', editorValue)
    const response = await fetch('http://localhost:8010/proxy/compile_content', {
        method: 'POST',
        body
    } );
    const jsonRsponse = await response.json();
    setErrors(jsonRsponse.errors);
    setSymbolTable(jsonRsponse.symbolTable);
    setIsCompiling(false);
}
