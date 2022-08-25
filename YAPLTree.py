# Generated from YAPL.g4 by ANTLR 4.10.1
from dist.YAPLVisitor import YAPLVisitor


# This class defines a complete generic visitor for a parse tree produced by YAPLParser.

class YAPLTree(YAPLVisitor):
    def __init__(self):
        YAPLVisitor.__init__()
        self.symbolTable = {}

    # Visit a parse tree produced by YAPLParser#prog.
    def visitProg(self, ctx):
        for node in ctx.class_prod():
            child = self.visit(node)
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#class_prod.
    def visitClass_prod(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#id.
    def visitId(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#MethodFeature.
    def visitMethodFeature(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#AttributeFeature.
    def visitAttributeFeature(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#formal.
    def visitFormal(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Add.
    def visitAdd(self, ctx):
        for node in ctx.expr():
            print(self.visit(node).get('type') if type(self.visit(node)) is dict else node.getText())
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#New.
    def visitNew(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#NotOrMinus.
    def visitNotOrMinus(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#IfElse.
    def visitIfElse(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#True.
    def visitTrue(self, ctx):
        return {'type': 'bool'}


    # Visit a parse tree produced by YAPLParser#String.
    def visitString(self, ctx):
        return {'type': 'string'}


    # Visit a parse tree produced by YAPLParser#False.
    def visitFalse(self, ctx):
        return {'type': 'bool'}


    # Visit a parse tree produced by YAPLParser#Self.
    def visitSelf(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#FunctionCallBuggy.
    def visitFunctionCallBuggy(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Int.
    def visitInt(self, ctx):
        return {'type': 'int'}


    # Visit a parse tree produced by YAPLParser#Divide.
    def visitDivide(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Parenthesis.
    def visitParenthesis(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#LessThan.
    def visitLessThan(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Identifier.
    def visitIdentifier(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Brackets.
    def visitBrackets(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Equal.
    def visitEqual(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Multiply.
    def visitMultiply(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#LessEqualThan.
    def visitLessEqualThan(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Declaration.
    def visitDeclaration(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#FunctionCall.
    def visitFunctionCall(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#While.
    def visitWhile(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Substract.
    def visitSubstract(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#IsVoid.
    def visitIsVoid(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Not.
    def visitNot(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Let.
    def visitLet(self, ctx):
        return self.visitChildren(ctx)
