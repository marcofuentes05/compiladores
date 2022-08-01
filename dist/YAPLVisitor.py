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


    # Visit a parse tree produced by YAPLParser#feature.
    def visitFeature(self, ctx:YAPLParser.FeatureContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#formal.
    def visitFormal(self, ctx:YAPLParser.FormalContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#expr.
    def visitExpr(self, ctx:YAPLParser.ExprContext):
        return self.visitChildren(ctx)



del YAPLParser