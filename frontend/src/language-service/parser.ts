import { YAPLParser, ProgContext } from "../ANTLR/YAPLParser";
import { YAPLLexer } from "../ANTLR/YAPLLexer";
import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import YAPLErrorListener, { IYAPLError } from "./YAPLErrorListener";

function parse(code: string): {ast:ProgContext, errors: IYAPLError[]} {
    const inputStream = new ANTLRInputStream(code);
    const lexer = new YAPLLexer(inputStream);
    lexer.removeErrorListeners()
    const todoLangErrorsListner = new YAPLErrorListener();
    lexer.addErrorListener(todoLangErrorsListner);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new YAPLParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(todoLangErrorsListner);
    const ast =  parser.prog();
    const errors: IYAPLError[]  = todoLangErrorsListner.getErrors();
    return {ast, errors};
}

export function parseAndGetASTRoot(code: string): ProgContext {
    const {ast} = parse(code);
    return ast;
}

export function parseAndGetSyntaxErrors(code: string): IYAPLError[] {
    const {errors} = parse(code);
    return errors;
}