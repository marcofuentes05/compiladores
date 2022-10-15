# Generated from YAPL.g4 by ANTLR 4.10.1
from antlr4 import *
if __name__ is not None and "." in __name__:
    from .YAPLParser import YAPLParser
else:
    from YAPLParser import YAPLParser

# This class defines a complete generic visitor for a parse tree produced by YAPLParser.

class YAPLVisitor(ParseTreeVisitor):

    # Visit a parse tree produced by YAPLParser#prog.
    def visitProg(self, ctx:YAPLParser.ProgContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#class_prod.
    def visitClass_prod(self, ctx:YAPLParser.Class_prodContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#id.
    def visitId(self, ctx:YAPLParser.IdContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#MethodFeature.
    def visitMethodFeature(self, ctx:YAPLParser.MethodFeatureContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#AttributeFeature.
    def visitAttributeFeature(self, ctx:YAPLParser.AttributeFeatureContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#formal.
    def visitFormal(self, ctx:YAPLParser.FormalContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Add.
    def visitAdd(self, ctx:YAPLParser.AddContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#New.
    def visitNew(self, ctx:YAPLParser.NewContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#NotOrMinus.
    def visitNotOrMinus(self, ctx:YAPLParser.NotOrMinusContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#IfElse.
    def visitIfElse(self, ctx:YAPLParser.IfElseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#True.
    def visitTrue(self, ctx:YAPLParser.TrueContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Self.
    def visitSelf(self, ctx:YAPLParser.SelfContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#String.
    def visitString(self, ctx:YAPLParser.StringContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#False.
    def visitFalse(self, ctx:YAPLParser.FalseContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#FunctionCallBuggy.
    def visitFunctionCallBuggy(self, ctx:YAPLParser.FunctionCallBuggyContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Int.
    def visitInt(self, ctx:YAPLParser.IntContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Divide.
    def visitDivide(self, ctx:YAPLParser.DivideContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Parenthesis.
    def visitParenthesis(self, ctx:YAPLParser.ParenthesisContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#LessThan.
    def visitLessThan(self, ctx:YAPLParser.LessThanContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Identifier.
    def visitIdentifier(self, ctx:YAPLParser.IdentifierContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Brackets.
    def visitBrackets(self, ctx:YAPLParser.BracketsContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Equal.
    def visitEqual(self, ctx:YAPLParser.EqualContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Multiply.
    def visitMultiply(self, ctx:YAPLParser.MultiplyContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#LessEqualThan.
    def visitLessEqualThan(self, ctx:YAPLParser.LessEqualThanContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Declaration.
    def visitDeclaration(self, ctx:YAPLParser.DeclarationContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#FunctionCall.
    def visitFunctionCall(self, ctx:YAPLParser.FunctionCallContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#While.
    def visitWhile(self, ctx:YAPLParser.WhileContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Substract.
    def visitSubstract(self, ctx:YAPLParser.SubstractContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#IsVoid.
    def visitIsVoid(self, ctx:YAPLParser.IsVoidContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Not.
    def visitNot(self, ctx:YAPLParser.NotContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Let.
    def visitLet(self, ctx:YAPLParser.LetContext):
        return self.visitChildren(ctx)



del YAPLParser