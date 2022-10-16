

export const onClickCompile = async (editor, setIsCompiling, setErrors, setSymbolTable, setThreeWayCode) => {
    setIsCompiling(true);
    const editorValue = editor && editor.getModel() ? editor.getModel().getValue() : '';
    const body = new FormData();
    body.append('program', editorValue)
    const response = await fetch('http://localhost:8010/proxy/compile_content', {
        method: 'POST',
        body
    } );
    if (response.status === 200) {
        const jsonResponse = await response.json();
        setErrors(jsonResponse.errors);
        setSymbolTable(jsonResponse.symbolTable);
        setThreeWayCode(jsonResponse.three_way_code);
        setIsCompiling(false);
    } else {
        setErrors(['Server error (NOT 200 STATUS)'])
    }
}
