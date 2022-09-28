import { ProgContext } from "../ANTLR/YAPLParser";
import { parseAndGetASTRoot, parseAndGetSyntaxErrors } from "./parser";
import { IYAPLError } from "./YAPLErrorListener";

export default class YAPLLanguageService {
    validate(code: string): IYAPLError[] {
        const syntaxErrors: IYAPLError[] = parseAndGetSyntaxErrors(code);
        return syntaxErrors;
    }

    
    checkSemanticRules(ast: ProgContext): IYAPLError[] {
        const errors: IYAPLError[] = [];
        const definedTodos: string[] = [];
        //TODO: Implement semantic validation here
        // ast.children.forEach(node => {
        //     if (node instanceof AddExpressionContext) {
        //         // if a Add expression : ADD TODO "STRING"
        //         const todo = node.STRING().text;
        //         // If a TODO is defined using ADD TODO instruction, we can re-add it.
        //         if (definedTodos.some(todo_ => todo_ === todo)) {
        //             // node has everything to know the position of this expression is in the code
        //             errors.push({
        //                 code: "2",
        //                 endColumn: node.stop.charPositionInLine + node.stop.stopIndex - node.stop.stopIndex,
        //                 endLineNumber: node.stop.line,
        //                 message: `Todo ${todo} already defined`,
        //                 startColumn: node.stop.charPositionInLine,
        //                 startLineNumber: node.stop.line
        //             });
        //         } else {
        //             definedTodos.push(todo);
        //         }
        //     }else if(node instanceof CompleteExpressionContext) {
        //         const todoToComplete = node.STRING().text;
        //         if(definedTodos.every(todo_ => todo_ !== todoToComplete)){
        //             // if the the todo is not yet defined, here we are only checking the predefined todo until this expression
        //             // which means the order is important
        //             errors.push({
        //                 code: "2",
        //                 endColumn: node.stop.charPositionInLine + node.stop.stopIndex - node.stop.stopIndex,
        //                 endLineNumber: node.stop.line,
        //                 message: `Todo ${todoToComplete} is not defined`,
        //                 startColumn: node.stop.charPositionInLine,
        //                 startLineNumber: node.stop.line
        //             });
        //         }
        //     }
        // })
        return errors;
    }

}