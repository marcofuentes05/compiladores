# Generated from YAPL.g4 by ANTLR 4.10.1
from pydoc import classname
from dist.YAPLVisitor import YAPLVisitor
from enum import Enum

class TokenTypes(Enum):
    CLASS_ID='class-id'
    VARIABLE_ID='variable-id'
    OPERATOR = 'operator'
    INT = 'int'
    BOOL = 'bool'
    STRING = 'string'
    FUNCTION_ID = 'function-id'

main_class_id = 'Main'

primitive_types = ['Int', 'String', 'Bool']

def getOccurrencePosition(element):
    elementPayload = element.getPayload()
    return f'{elementPayload.line}:{elementPayload.column}'

# This class defines a complete generic visitor for a parse tree produced by YAPLParser.

class YAPLTree(YAPLVisitor):
    def __init__(self):
        YAPLVisitor.__init__(self)
        self.symbolTable = {}
        self.errors = []


    # Visit a parse tree produced by YAPLParser#prog.
    def visitProg(self, ctx):
        # for node in ctx.class_prod():
        #     child = self.visit(node)
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#class_prod.
    def visitClass_prod(self, ctx):
        # print(dir(ctx))
        # print(ctx.getRuleContext().getText)
        classNames = [classCtx.getText() for classCtx in ctx.TYPE_ID()]
        has_error = False
        if classNames[0] in primitive_types:
            self.errors.append(f'Cannot override primitive type f{classNames[0]} @{ctx.TYPE_ID()[0].getPayload().line}')
            has_error = True
        if len(classNames) == 2 and classNames[0] == classNames[1]:
            self.errors.append(f'Recursive inheritance @ {ctx.TYPE_ID()[0].getPayload().line}')
            has_error = True
        if main_class_id in classNames and main_class_id in self.symbolTable:
            self.errors.append(f'Multiple main defs @ {ctx.TYPE_ID()[0].getPayload().line}')
            has_error = True
        if len(classNames) == 2 and classNames[1] in primitive_types:
            self.errors.append(f'Class {classNames[0]} cannot inherit from primitive type {classNames[1]} @{ctx.TYPE_ID()[0].getPayload().line}')
            has_error = True
        if not has_error:
            for className in ctx.TYPE_ID():
                if not className.getText() in self.symbolTable:
                    self.symbolTable[className.getText()] = { 'type': TokenTypes.CLASS_ID.value, 'occurrences': [getOccurrencePosition(className)] }
            
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#id.
    def visitId(self, ctx):
        id = ctx.OBJECT_ID()
        if not id.getText() in self.symbolTable:
            self.symbolTable[id.getText()] = { 'type': TokenTypes.VARIABLE_ID.value, 'occurrences': [getOccurrencePosition(id) ] }
        else:
            self.symbolTable[id.getText()]['occurrences'].append(getOccurrencePosition(id))
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#MethodFeature.
    def visitMethodFeature(self, ctx):
        id = ctx.id_().getText()
        typeId = ctx.TYPE_ID().getText()
        self.symbolTable[id] = {
            'type': TokenTypes.FUNCTION_ID.value,
            'scope': ctx.parentCtx.getRuleContext().TYPE_ID()[0].getText(),
            'occurrences': [getOccurrencePosition(ctx.TYPE_ID())],
            'variable-type': TokenTypes.FUNCTION_ID.value,
            'return-type': typeId,
            'props': [{'id': formal.id_().getText(), 'type': formal.TYPE_ID().getText()} for formal in ctx.formal()]
        }
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#AttributeFeature.
    def visitAttributeFeature(self, ctx):
        id = ctx.id_().getText()
        typeId = ctx.TYPE_ID().getText()
        self.symbolTable[id] = {
            'type': TokenTypes.VARIABLE_ID.value,
            'scope': ctx.parentCtx.getRuleContext().TYPE_ID()[0].getText(),
            'occurrences': [getOccurrencePosition(ctx.TYPE_ID())],
            'variable-type': typeId
        }
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#formal.
    def visitFormal(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Add.
    def visitAdd(self, ctx):
        # for child in ctx.getChildren():
            # print('child ',child.getText())
        for node in ctx.expr():
            print('exp', node.getText())
            self.visit(node)
            # type = self.symbolTable[node.getText()]['type']
            # if (self.symbolTable[node.getText()]['type'] != 'int' and self.symbolTable[node.getText()]['type'] != 'bool'):
            #     self.errors.append(f'Invalid addition {node.getText()} is {type} @ line {ctx.PLUS_SIGN().getPayload().line}')
            #     return {'type': 'Error'}
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
        bool = ctx.TRUE()
        if not bool.getText() in self.symbolTable:
            self.symbolTable[bool.getText()] = { 'type': TokenTypes.BOOL.value, 'occurrences': [getOccurrencePosition(bool) ] }
        else:
            self.symbolTable[bool.getText()]['occurrences'].append(getOccurrencePosition(bool))
        return {'type': 'bool'}


    # Visit a parse tree produced by YAPLParser#String.
    def visitString(self, ctx):
        string = ctx.STRING()
        if not string.getText() in self.symbolTable:
            self.symbolTable[string.getText()] = { 'type': TokenTypes.STRING.value, 'occurrences': [getOccurrencePosition(string) ] }
        else:
            self.symbolTable[string.getText()]['occurrences'].append(getOccurrencePosition(string))
        return {'type': 'string'}


    # Visit a parse tree produced by YAPLParser#False.
    def visitFalse(self, ctx):
        bool = ctx.FALSE()
        if not bool.getText() in self.symbolTable:
            self.symbolTable[bool.getText()] = { 'type': TokenTypes.BOOL.value, 'occurrences': [getOccurrencePosition(bool) ] }
        else:
            self.symbolTable[bool.getText()]['occurrences'].append(getOccurrencePosition(bool))
        return {'type': 'bool'}


    # Visit a parse tree produced by YAPLParser#Self.
    def visitSelf(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#FunctionCallBuggy.
    def visitFunctionCallBuggy(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Int.
    def visitInt(self, ctx):
        num = ctx.INTEGER()
        if not num.getText() in self.symbolTable:
            self.symbolTable[num.getText()] = { 'type': TokenTypes.INT.value, 'occurrences': [getOccurrencePosition(num) ] }
        else:
            self.symbolTable[num.getText()]['occurrences'].append(getOccurrencePosition(num))
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
        for node in ctx.expr():
            print('hola',node.getText())
            child = self.visit(node)
            print('child:',child)
            # type = self.symbolTable[node.getText()]['type']
            # if (self.symbolTable[node.getText()]['type'] != 'int' and self.symbolTable[node.getText()]['type'] != 'bool'):
            #     self.errors.append(f'Invalid division {node.getText()} is {type} @ line {ctx.MULTIPLY_SIGN().getPayload().line}')
            #     return {'type': 'Error'}
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
