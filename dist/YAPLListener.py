# Generated from YAPL.g4 by ANTLR 4.10.1
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .YAPLParser import YAPLParser
else:
    from YAPLParser import YAPLParser

# This class defines a complete listener for a parse tree produced by YAPLParser.
class YAPLListener(ParseTreeListener):

    # Enter a parse tree produced by YAPLParser#prog.
    def enterProg(self, ctx:YAPLParser.ProgContext):
        pass

    # Exit a parse tree produced by YAPLParser#prog.
    def exitProg(self, ctx:YAPLParser.ProgContext):
        pass


    # Enter a parse tree produced by YAPLParser#class_prod.
    def enterClass_prod(self, ctx:YAPLParser.Class_prodContext):
        pass

    # Exit a parse tree produced by YAPLParser#class_prod.
    def exitClass_prod(self, ctx:YAPLParser.Class_prodContext):
        pass


    # Enter a parse tree produced by YAPLParser#id.
    def enterId(self, ctx:YAPLParser.IdContext):
        pass

    # Exit a parse tree produced by YAPLParser#id.
    def exitId(self, ctx:YAPLParser.IdContext):
        pass


    # Enter a parse tree produced by YAPLParser#MethodFeature.
    def enterMethodFeature(self, ctx:YAPLParser.MethodFeatureContext):
        pass

    # Exit a parse tree produced by YAPLParser#MethodFeature.
    def exitMethodFeature(self, ctx:YAPLParser.MethodFeatureContext):
        pass


    # Enter a parse tree produced by YAPLParser#AttributeFeature.
    def enterAttributeFeature(self, ctx:YAPLParser.AttributeFeatureContext):
        pass

    # Exit a parse tree produced by YAPLParser#AttributeFeature.
    def exitAttributeFeature(self, ctx:YAPLParser.AttributeFeatureContext):
        pass


    # Enter a parse tree produced by YAPLParser#formal.
    def enterFormal(self, ctx:YAPLParser.FormalContext):
        pass

    # Exit a parse tree produced by YAPLParser#formal.
    def exitFormal(self, ctx:YAPLParser.FormalContext):
        pass


    # Enter a parse tree produced by YAPLParser#Add.
    def enterAdd(self, ctx:YAPLParser.AddContext):
        pass

    # Exit a parse tree produced by YAPLParser#Add.
    def exitAdd(self, ctx:YAPLParser.AddContext):
        pass


    # Enter a parse tree produced by YAPLParser#New.
    def enterNew(self, ctx:YAPLParser.NewContext):
        pass

    # Exit a parse tree produced by YAPLParser#New.
    def exitNew(self, ctx:YAPLParser.NewContext):
        pass


    # Enter a parse tree produced by YAPLParser#NotOrMinus.
    def enterNotOrMinus(self, ctx:YAPLParser.NotOrMinusContext):
        pass

    # Exit a parse tree produced by YAPLParser#NotOrMinus.
    def exitNotOrMinus(self, ctx:YAPLParser.NotOrMinusContext):
        pass


    # Enter a parse tree produced by YAPLParser#IfElse.
    def enterIfElse(self, ctx:YAPLParser.IfElseContext):
        pass

    # Exit a parse tree produced by YAPLParser#IfElse.
    def exitIfElse(self, ctx:YAPLParser.IfElseContext):
        pass


    # Enter a parse tree produced by YAPLParser#True.
    def enterTrue(self, ctx:YAPLParser.TrueContext):
        pass

    # Exit a parse tree produced by YAPLParser#True.
    def exitTrue(self, ctx:YAPLParser.TrueContext):
        pass


    # Enter a parse tree produced by YAPLParser#String.
    def enterString(self, ctx:YAPLParser.StringContext):
        pass

    # Exit a parse tree produced by YAPLParser#String.
    def exitString(self, ctx:YAPLParser.StringContext):
        pass


    # Enter a parse tree produced by YAPLParser#False.
    def enterFalse(self, ctx:YAPLParser.FalseContext):
        pass

    # Exit a parse tree produced by YAPLParser#False.
    def exitFalse(self, ctx:YAPLParser.FalseContext):
        pass


    # Enter a parse tree produced by YAPLParser#Self.
    def enterSelf(self, ctx:YAPLParser.SelfContext):
        pass

    # Exit a parse tree produced by YAPLParser#Self.
    def exitSelf(self, ctx:YAPLParser.SelfContext):
        pass


    # Enter a parse tree produced by YAPLParser#FunctionCallBuggy.
    def enterFunctionCallBuggy(self, ctx:YAPLParser.FunctionCallBuggyContext):
        pass

    # Exit a parse tree produced by YAPLParser#FunctionCallBuggy.
    def exitFunctionCallBuggy(self, ctx:YAPLParser.FunctionCallBuggyContext):
        pass


    # Enter a parse tree produced by YAPLParser#Int.
    def enterInt(self, ctx:YAPLParser.IntContext):
        pass

    # Exit a parse tree produced by YAPLParser#Int.
    def exitInt(self, ctx:YAPLParser.IntContext):
        pass


    # Enter a parse tree produced by YAPLParser#Divide.
    def enterDivide(self, ctx:YAPLParser.DivideContext):
        pass

    # Exit a parse tree produced by YAPLParser#Divide.
    def exitDivide(self, ctx:YAPLParser.DivideContext):
        pass


    # Enter a parse tree produced by YAPLParser#Parenthesis.
    def enterParenthesis(self, ctx:YAPLParser.ParenthesisContext):
        pass

    # Exit a parse tree produced by YAPLParser#Parenthesis.
    def exitParenthesis(self, ctx:YAPLParser.ParenthesisContext):
        pass


    # Enter a parse tree produced by YAPLParser#LessThan.
    def enterLessThan(self, ctx:YAPLParser.LessThanContext):
        pass

    # Exit a parse tree produced by YAPLParser#LessThan.
    def exitLessThan(self, ctx:YAPLParser.LessThanContext):
        pass


    # Enter a parse tree produced by YAPLParser#Identifier.
    def enterIdentifier(self, ctx:YAPLParser.IdentifierContext):
        pass

    # Exit a parse tree produced by YAPLParser#Identifier.
    def exitIdentifier(self, ctx:YAPLParser.IdentifierContext):
        pass


    # Enter a parse tree produced by YAPLParser#Brackets.
    def enterBrackets(self, ctx:YAPLParser.BracketsContext):
        pass

    # Exit a parse tree produced by YAPLParser#Brackets.
    def exitBrackets(self, ctx:YAPLParser.BracketsContext):
        pass


    # Enter a parse tree produced by YAPLParser#Equal.
    def enterEqual(self, ctx:YAPLParser.EqualContext):
        pass

    # Exit a parse tree produced by YAPLParser#Equal.
    def exitEqual(self, ctx:YAPLParser.EqualContext):
        pass


    # Enter a parse tree produced by YAPLParser#Multiply.
    def enterMultiply(self, ctx:YAPLParser.MultiplyContext):
        pass

    # Exit a parse tree produced by YAPLParser#Multiply.
    def exitMultiply(self, ctx:YAPLParser.MultiplyContext):
        pass


    # Enter a parse tree produced by YAPLParser#LessEqualThan.
    def enterLessEqualThan(self, ctx:YAPLParser.LessEqualThanContext):
        pass

    # Exit a parse tree produced by YAPLParser#LessEqualThan.
    def exitLessEqualThan(self, ctx:YAPLParser.LessEqualThanContext):
        pass


    # Enter a parse tree produced by YAPLParser#Declaration.
    def enterDeclaration(self, ctx:YAPLParser.DeclarationContext):
        pass

    # Exit a parse tree produced by YAPLParser#Declaration.
    def exitDeclaration(self, ctx:YAPLParser.DeclarationContext):
        pass


    # Enter a parse tree produced by YAPLParser#FunctionCall.
    def enterFunctionCall(self, ctx:YAPLParser.FunctionCallContext):
        pass

    # Exit a parse tree produced by YAPLParser#FunctionCall.
    def exitFunctionCall(self, ctx:YAPLParser.FunctionCallContext):
        pass


    # Enter a parse tree produced by YAPLParser#While.
    def enterWhile(self, ctx:YAPLParser.WhileContext):
        pass

    # Exit a parse tree produced by YAPLParser#While.
    def exitWhile(self, ctx:YAPLParser.WhileContext):
        pass


    # Enter a parse tree produced by YAPLParser#Substract.
    def enterSubstract(self, ctx:YAPLParser.SubstractContext):
        pass

    # Exit a parse tree produced by YAPLParser#Substract.
    def exitSubstract(self, ctx:YAPLParser.SubstractContext):
        pass


    # Enter a parse tree produced by YAPLParser#IsVoid.
    def enterIsVoid(self, ctx:YAPLParser.IsVoidContext):
        pass

    # Exit a parse tree produced by YAPLParser#IsVoid.
    def exitIsVoid(self, ctx:YAPLParser.IsVoidContext):
        pass


    # Enter a parse tree produced by YAPLParser#Not.
    def enterNot(self, ctx:YAPLParser.NotContext):
        pass

    # Exit a parse tree produced by YAPLParser#Not.
    def exitNot(self, ctx:YAPLParser.NotContext):
        pass


    # Enter a parse tree produced by YAPLParser#Let.
    def enterLet(self, ctx:YAPLParser.LetContext):
        pass

    # Exit a parse tree produced by YAPLParser#Let.
    def exitLet(self, ctx:YAPLParser.LetContext):
        pass



del YAPLParser