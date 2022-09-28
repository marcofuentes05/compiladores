// Generated from ./YAPL.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { MethodFeatureContext } from "./YAPLParser";
import { AttributeFeatureContext } from "./YAPLParser";
import { DeclarationContext } from "./YAPLParser";
import { FunctionCallBuggyContext } from "./YAPLParser";
import { FunctionCallContext } from "./YAPLParser";
import { IfElseContext } from "./YAPLParser";
import { WhileContext } from "./YAPLParser";
import { BracketsContext } from "./YAPLParser";
import { LetContext } from "./YAPLParser";
import { NewContext } from "./YAPLParser";
import { IsVoidContext } from "./YAPLParser";
import { AddContext } from "./YAPLParser";
import { SubstractContext } from "./YAPLParser";
import { MultiplyContext } from "./YAPLParser";
import { DivideContext } from "./YAPLParser";
import { NotOrMinusContext } from "./YAPLParser";
import { LessThanContext } from "./YAPLParser";
import { LessEqualThanContext } from "./YAPLParser";
import { EqualContext } from "./YAPLParser";
import { NotContext } from "./YAPLParser";
import { ParenthesisContext } from "./YAPLParser";
import { IdentifierContext } from "./YAPLParser";
import { IntContext } from "./YAPLParser";
import { StringContext } from "./YAPLParser";
import { TrueContext } from "./YAPLParser";
import { FalseContext } from "./YAPLParser";
import { SelfContext } from "./YAPLParser";
import { ProgContext } from "./YAPLParser";
import { Class_prodContext } from "./YAPLParser";
import { IdContext } from "./YAPLParser";
import { FeatureContext } from "./YAPLParser";
import { FormalContext } from "./YAPLParser";
import { ExprContext } from "./YAPLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `YAPLParser`.
 */
export interface YAPLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `MethodFeature`
	 * labeled alternative in `YAPLParser.feature`.
	 * @param ctx the parse tree
	 */
	enterMethodFeature?: (ctx: MethodFeatureContext) => void;
	/**
	 * Exit a parse tree produced by the `MethodFeature`
	 * labeled alternative in `YAPLParser.feature`.
	 * @param ctx the parse tree
	 */
	exitMethodFeature?: (ctx: MethodFeatureContext) => void;

	/**
	 * Enter a parse tree produced by the `AttributeFeature`
	 * labeled alternative in `YAPLParser.feature`.
	 * @param ctx the parse tree
	 */
	enterAttributeFeature?: (ctx: AttributeFeatureContext) => void;
	/**
	 * Exit a parse tree produced by the `AttributeFeature`
	 * labeled alternative in `YAPLParser.feature`.
	 * @param ctx the parse tree
	 */
	exitAttributeFeature?: (ctx: AttributeFeatureContext) => void;

	/**
	 * Enter a parse tree produced by the `Declaration`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by the `Declaration`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by the `FunctionCallBuggy`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallBuggy?: (ctx: FunctionCallBuggyContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionCallBuggy`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallBuggy?: (ctx: FunctionCallBuggyContext) => void;

	/**
	 * Enter a parse tree produced by the `FunctionCall`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionCall`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by the `IfElse`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIfElse?: (ctx: IfElseContext) => void;
	/**
	 * Exit a parse tree produced by the `IfElse`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIfElse?: (ctx: IfElseContext) => void;

	/**
	 * Enter a parse tree produced by the `While`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterWhile?: (ctx: WhileContext) => void;
	/**
	 * Exit a parse tree produced by the `While`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitWhile?: (ctx: WhileContext) => void;

	/**
	 * Enter a parse tree produced by the `Brackets`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBrackets?: (ctx: BracketsContext) => void;
	/**
	 * Exit a parse tree produced by the `Brackets`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBrackets?: (ctx: BracketsContext) => void;

	/**
	 * Enter a parse tree produced by the `Let`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLet?: (ctx: LetContext) => void;
	/**
	 * Exit a parse tree produced by the `Let`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLet?: (ctx: LetContext) => void;

	/**
	 * Enter a parse tree produced by the `New`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterNew?: (ctx: NewContext) => void;
	/**
	 * Exit a parse tree produced by the `New`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitNew?: (ctx: NewContext) => void;

	/**
	 * Enter a parse tree produced by the `IsVoid`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIsVoid?: (ctx: IsVoidContext) => void;
	/**
	 * Exit a parse tree produced by the `IsVoid`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIsVoid?: (ctx: IsVoidContext) => void;

	/**
	 * Enter a parse tree produced by the `Add`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterAdd?: (ctx: AddContext) => void;
	/**
	 * Exit a parse tree produced by the `Add`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitAdd?: (ctx: AddContext) => void;

	/**
	 * Enter a parse tree produced by the `Substract`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterSubstract?: (ctx: SubstractContext) => void;
	/**
	 * Exit a parse tree produced by the `Substract`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitSubstract?: (ctx: SubstractContext) => void;

	/**
	 * Enter a parse tree produced by the `Multiply`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterMultiply?: (ctx: MultiplyContext) => void;
	/**
	 * Exit a parse tree produced by the `Multiply`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitMultiply?: (ctx: MultiplyContext) => void;

	/**
	 * Enter a parse tree produced by the `Divide`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterDivide?: (ctx: DivideContext) => void;
	/**
	 * Exit a parse tree produced by the `Divide`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitDivide?: (ctx: DivideContext) => void;

	/**
	 * Enter a parse tree produced by the `NotOrMinus`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterNotOrMinus?: (ctx: NotOrMinusContext) => void;
	/**
	 * Exit a parse tree produced by the `NotOrMinus`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitNotOrMinus?: (ctx: NotOrMinusContext) => void;

	/**
	 * Enter a parse tree produced by the `LessThan`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLessThan?: (ctx: LessThanContext) => void;
	/**
	 * Exit a parse tree produced by the `LessThan`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLessThan?: (ctx: LessThanContext) => void;

	/**
	 * Enter a parse tree produced by the `LessEqualThan`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLessEqualThan?: (ctx: LessEqualThanContext) => void;
	/**
	 * Exit a parse tree produced by the `LessEqualThan`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLessEqualThan?: (ctx: LessEqualThanContext) => void;

	/**
	 * Enter a parse tree produced by the `Equal`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterEqual?: (ctx: EqualContext) => void;
	/**
	 * Exit a parse tree produced by the `Equal`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitEqual?: (ctx: EqualContext) => void;

	/**
	 * Enter a parse tree produced by the `Not`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterNot?: (ctx: NotContext) => void;
	/**
	 * Exit a parse tree produced by the `Not`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitNot?: (ctx: NotContext) => void;

	/**
	 * Enter a parse tree produced by the `Parenthesis`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterParenthesis?: (ctx: ParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by the `Parenthesis`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitParenthesis?: (ctx: ParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by the `Identifier`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by the `Identifier`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by the `Int`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterInt?: (ctx: IntContext) => void;
	/**
	 * Exit a parse tree produced by the `Int`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitInt?: (ctx: IntContext) => void;

	/**
	 * Enter a parse tree produced by the `String`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by the `String`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by the `True`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterTrue?: (ctx: TrueContext) => void;
	/**
	 * Exit a parse tree produced by the `True`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitTrue?: (ctx: TrueContext) => void;

	/**
	 * Enter a parse tree produced by the `False`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFalse?: (ctx: FalseContext) => void;
	/**
	 * Exit a parse tree produced by the `False`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFalse?: (ctx: FalseContext) => void;

	/**
	 * Enter a parse tree produced by the `Self`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterSelf?: (ctx: SelfContext) => void;
	/**
	 * Exit a parse tree produced by the `Self`
	 * labeled alternative in `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitSelf?: (ctx: SelfContext) => void;

	/**
	 * Enter a parse tree produced by `YAPLParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `YAPLParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `YAPLParser.class_prod`.
	 * @param ctx the parse tree
	 */
	enterClass_prod?: (ctx: Class_prodContext) => void;
	/**
	 * Exit a parse tree produced by `YAPLParser.class_prod`.
	 * @param ctx the parse tree
	 */
	exitClass_prod?: (ctx: Class_prodContext) => void;

	/**
	 * Enter a parse tree produced by `YAPLParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `YAPLParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by `YAPLParser.feature`.
	 * @param ctx the parse tree
	 */
	enterFeature?: (ctx: FeatureContext) => void;
	/**
	 * Exit a parse tree produced by `YAPLParser.feature`.
	 * @param ctx the parse tree
	 */
	exitFeature?: (ctx: FeatureContext) => void;

	/**
	 * Enter a parse tree produced by `YAPLParser.formal`.
	 * @param ctx the parse tree
	 */
	enterFormal?: (ctx: FormalContext) => void;
	/**
	 * Exit a parse tree produced by `YAPLParser.formal`.
	 * @param ctx the parse tree
	 */
	exitFormal?: (ctx: FormalContext) => void;

	/**
	 * Enter a parse tree produced by `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `YAPLParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
}

