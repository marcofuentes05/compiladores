# Generated from YAPL.g4 by ANTLR 4.10.1
from antlr4 import *
if __name__ is not None and "." in __name__:
    from dist.YAPLParser import YAPLParser
else:
    from dist.YAPLParser import YAPLParser

# This class defines a complete generic visitor for a parse tree produced by YAPLParser.

class YAPLTree(ParseTreeVisitor):

    def symbolTable(self):
        self.symbolTable ={}

    def evalRules(self, operator, var1, var2):
        if operator == 'PLUS_SIGN':
            if (var1 == "INTEGER" and var2 == "INTEGER") or (var1 == "STRING" and var2 == "STRING"):
                return True
            else:
                return False
        elif operator == 'MINUS_SIGN':
            if (var1 == "INTEGER" and var2 == "INTEGER"):
                return True
            else:
                return False
        elif operator == "MULTIPLY_SIGN":
            if (var1 == "INTEGER" and var2 == "INTEGER") or (var1 == "STRING" and var2 == "INTEGER") or (var1 == "INTEGER" and var2 == "STRING"):
                return True
            else:
                return False
        elif operator == "DIVIDE_SIGN":
            if (var1 == "INTEGER" and var2 == "INTEGER"):
                return True
            else:
                return False
        elif operator == "|":
            if (var1 == "TRUE" and var2 == "TRUE") or (var1 == "TRUE" and var2 == "FALSE") or (var1 == "FALSE" and var2 == "TRUE") or (var1 == "FALSE" and var2 == "FALSE"):
                return True
            else:
                return False
        elif operator == "&":
            if (var1 == "TRUE" and var2 == "TRUE") or (var1 == "TRUE" and var2 == "FALSE") or (var1 == "FALSE" and var2 == "TRUE") or (var1 == "FALSE" and var2 == "FALSE"):
                return True
            else: return False
        else:
            pass

    # Visit a parse tree produced by YAPLParser#prog.
    def visitProg(self, ctx:YAPLParser.ProgContext):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#class_prod.
    def visitClass_prod(self, ctx:YAPLParser.Class_prodContext):
        self.symbolTable[str(ctx.CLASS())] = {"type": "CLASS"}

        if len(ctx.TYPE_ID()) == 1:
            self.symbolTable[str(ctx.TYPE_ID()[0])] = {"type": "TYPE_ID"}


        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#id.
    def visitId(self, ctx:YAPLParser.IdContext):
        self.symbolTable[str(ctx.OBJECT_ID())] = {'type': "ID"}

        # if len(ctx.TYPE_ID()) == 1:
            # self.symbolTable["TYPE_ID"]= {'type': ctx.TYPE_ID()[0]}

        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#feature.
    def visitFeature(self, ctx:YAPLParser.FeatureContext):
        self.symbolTable[str(ctx.TYPE_ID())] = {'type': "TYPE_ID"}

        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#formal.
    def visitFormal(self, ctx:YAPLParser.FormalContext):
        print(ctx.TYPE_ID)
        self.symbolTable[str(ctx.OBJECT_ID())] = {'type': "OBJECT_ID"}

        if len(ctx.TYPE_ID()) == 1:
            self.symbolTable[str(ctx.TYPE_ID()[0])]= {'type': "TYPE_ID"}

        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#expr.
    def visitExpr(self, ctx:YAPLParser.ExprContext):
        if len(ctx.TYPE_ID()) == 1:
            self.symbolTable[str(ctx.TYPE_ID()[0])] = {'type':"TYPE_ID"}
        
        if ctx.DIVIDE_SIGN:
            self.symbolTable[str(ctx.DIVIDE_SIGN())] = {'type':"DIVIDE_SIGN"}

        if ctx.CLOSE_BRACKET:
            self.symbolTable[str(ctx.CLOSE_BRACKET())] = {'type':"CLOSE_BRACKET"}

        if ctx.CLOSE_PARENTHESIS:
            self.symbolTable[str(ctx.CLOSE_PARENTHESIS())] = {'type':"CLOSE_PARENTHESIS"}

        if ctx.ELSE:
            self.symbolTable[str(ctx.ELSE())] = {'type':"ELSE"}

        if ctx.EQUAL_SIGN:
            self.symbolTable[str(ctx.EQUAL_SIGN())] = {'type':"EQUAL_SIGN"}

        if ctx.FALSE:
            self.symbolTable[str(ctx.FALSE())] = {'type':"FALSE"}

        if ctx.FI:
            self.symbolTable[str(ctx.FI())] = {'type':"FI"}

        if ctx.IF:
            self.symbolTable[str(ctx.IF())] = {'type':"IF"}

        if ctx.INTEGER:
            self.symbolTable[str(ctx.INTEGER())] = {'type':"INTEGER"}

        if ctx.ISVOID:
            self.symbolTable[str(ctx.ISVOID())] = {'type':"ISVOID"}

        if ctx.LE_SIGN:
            self.symbolTable[str(ctx.LE_SIGN())] = {'type':"LE_SIGN"}

        if ctx.LT_SIGN:
            self.symbolTable[str(ctx.LT_SIGN())] = {'type':"LT_SIGN"}

        if ctx.LOOP:
            self.symbolTable[str(ctx.LOOP())] = {'type':"LOOP"}

        if ctx.MINUS_SIGN:
            self.symbolTable[str(ctx.MINUS_SIGN())] = {'type':"MINUS_SIGN"}

        if ctx.MULTIPLY_SIGN:
            self.symbolTable[str(ctx.MULTIPLY_SIGN())] = {'type':"MULTIPLY_SIGN"}

        if ctx.NEW:
            self.symbolTable[str(ctx.NEW())] = {'type':"NEW"}

        if ctx.NOT:
            self.symbolTable[str(ctx.NOT())] = {'type':"NOT"}

        if ctx.NOT_SIGN:
            self.symbolTable[str(ctx.NOT_SIGN())] = {'type':"NOT_SIGN"}

        if ctx.OPEN_BRACKER:
            self.symbolTable[str(ctx.OPEN_BRACKER())] = {'type':"OPEN_BRACKER"}

        if ctx.OPEN_PARENTHESIS:
            self.symbolTable[str(ctx.OPEN_PARENTHESIS())] = {'type':"OPEN_PARENTHESIS"}

        if ctx.PLUS_SIGN:
            self.symbolTable[str(ctx.PLUS_SIGN())] = {'type':"PLUS_SIGN"}

        if ctx.POOL:
            self.symbolTable[str(ctx.POOL())] = {'type':"POOL"}

        if ctx.SELF:
            self.symbolTable[str(ctx.SELF())] = {'type':"SELF"}

        if ctx.STRING:
            self.symbolTable[str(ctx.STRING())] = {'type':"STRING"}

        if ctx.THEN:
            self.symbolTable[str(ctx.THEN())] = {'type':"THEN"}

        if ctx.TRUE:
            self.symbolTable[str(ctx.TRUE())] = {'type':"TRUE"}
            
        if ctx.WHILE:
            self.symbolTable[str(ctx.WHILE())] = {'type':"WHILE"}


        return self.visitChildren(ctx)



del YAPLParser