# Generated from YAPL.g4 by ANTLR 4.10.1
from pydoc import classname
from dist.YAPLVisitor import YAPLVisitor
from dist.YAPLParser import YAPLParser
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
        self.symbolTable = [
            {'id': 'String', 'type': 'class', 'value': None, 'scope': None, 'belongs': None, 'typeParams': None, 'line': None, 'col': None},
            {'id': 'Int', 'type': 'class', 'value': None, 'scope': None, 'belongs': None, 'typeParams': None, 'line': None, 'col': None},
            {'id': 'Bool', 'type': 'class', 'value': None, 'scope': None, 'belongs': None, 'typeParams': None, 'line': None, 'col': None},
            {'id': 'IO', 'type': 'class', 'value': None, 'scope': None, 'belongs': None, 'typeParams': None, 'line': None, 'col': None},
            {'id': 'in_string', 'type': 'String', 'value': None, 'scope': 'global', 'belongs': 'IO', 'typeParams': ['String'], 'line': None, 'col': None},
            {'id': 'out_string', 'type': 'SELF_TYPE', 'value': None, 'scope': 'global', 'belongs': 'IO', 'typeParams': ['String'], 'line': None, 'col': None},
            {'id': 'in_int', 'type': 'Int', 'value': None, 'scope': 'global', 'belongs': 'IO', 'typeParams': ['Int'], 'line': None, 'col': None},
            {'id': 'out_int', 'type': 'SELF_TYPE', 'value': None, 'scope': 'global', 'belongs': 'IO', 'typeParams': ['Int'], 'line': None, 'col': None},
            {'id': 'length', 'type': 'Int', 'value': None, 'scope': 'global', 'belongs': 'String', 'typeParams': [], 'line': None, 'col': None},
            {'id': 'concat', 'type': 'String', 'value': None, 'scope': 'global', 'belongs': 'String', 'typeParams': ['String'], 'line': None, 'col': None},
            {'id': 'substr', 'type': 'String', 'value': None, 'scope': 'global', 'belongs': 'String', 'typeParams': ['Int', 'Int'], 'line': None, 'col': None}
        ]
        self.errors = []

        self.mainClassCounter = 0
        self.mainMethodCounter = 0

        self.currentClass = ''
        self.currentMethod = ''


    # Visit a parse tree produced by YAPLParser#prog.
    def visitProg(self, ctx):
        # for node in ctx.class_prod():
        #     child = self.visit(node)
        self.visitChildren(ctx)
        if self.mainClassCounter != 1:
            self.errors.append(f'There has to be 1 Main class')
        elif self.mainMethodCounter != 1:
            self.errors.append(f'Class Main must have a main method')


    # Visit a parse tree produced by YAPLParser#class_prod.
    def visitClass_prod(self, ctx):

        #See if there is only 1 Main class
        for clase in ctx.TYPE_ID():
            if clase.getText() == 'Main':
                self.mainClassCounter += 1

        #Set current class
        self.currentClass = ctx.TYPE_ID()[0].getText()
        
        inheritedClass = None

        # Check if the class doesn't exist
        add = True

        # check if Main class inherits
        if self.currentClass == 'Main' and len(ctx.TYPE_ID()) > 1:
            self.errors.append(f"Main class can't inherit from another class")
        elif len(ctx.TYPE_ID()) > 1:
            if ctx.TYPE_ID()[1].getText() in primitive_types:
                self.errors.append(f"Can't inherit from primitive type")
                add = False
            elif len([symbol for symbol in self.symbolTable if ctx.TYPE_ID()[1].getText()== symbol['id']]) == 0:
                self.errors.append(f'Inherited class {ctx.TYPE_ID()[1].getText()} does not exist')
                add = False
            else:
                inheritedClass = ctx.TYPE_ID()[1].getText()

        # class to be added to the table
        entry = {'id': self.currentClass, 'type': 'class', 'value': None, 'scope': None, 'belongs': None, 'typeParams': None, 'line': ctx.TYPE_ID()[0].getPayload().line, 'col': ctx.TYPE_ID()[0].getPayload().column, 'inherits': inheritedClass}

        for symbol in self.symbolTable:
            if symbol['id'] == entry['id']:
                add = False

        #Add entry to table
        if add == True:
            self.symbolTable.append(entry)

        # classNames = [classCtx.getText() for classCtx in ctx.TYPE_ID()]
        # has_error = False
        # if classNames[0] in primitive_types:
        #     self.errors.append(f'Cannot override primitive type f{classNames[0]} @{ctx.TYPE_ID()[0].getPayload().line}')
        #     has_error = True
        # if len(classNames) == 2 and classNames[0] == classNames[1]:
        #     self.errors.append(f'Recursive inheritance @ {ctx.TYPE_ID()[0].getPayload().line}')
        #     has_error = True
        # if main_class_id in classNames and main_class_id in self.symbolTable:
        #     self.errors.append(f'Multiple main defs @ {ctx.TYPE_ID()[0].getPayload().line}')
        #     has_error = True
        # if len(classNames) == 2 and classNames[1] in primitive_types:
        #     self.errors.append(f'Class {classNames[0]} cannot inherit from primitive type {classNames[1]} @{ctx.TYPE_ID()[0].getPayload().line}')
        #     has_error = True
        # if not has_error:
        #     for className in ctx.TYPE_ID():
        #         if not className.getText() in self.symbolTable:
        #             self.symbolTable.append({ 'id': className.getText(), 'type': TokenTypes.CLASS_ID.value, 'occurrences': [getOccurrencePosition(className)] })
            
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#id.
    def visitId(self, ctx):
        id = ctx.OBJECT_ID()
        # if not id.getText() in self.symbolTable:
        #     self.symbolTable.append({ 'id': id.getText(), 'type': TokenTypes.VARIABLE_ID.value, 'occurrences': [getOccurrencePosition(id) ] })
        # else:
        #     self.symbolTable[id.getText()]['occurrences'].append(getOccurrencePosition(id))
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#MethodFeature.
    def visitMethodFeature(self, ctx):
        #Get method name
        id = ctx.id_().getText()
        #See if there is only 1 main method on Main class
        if self.currentClass == 'Main' and id == 'main':
            self.mainMethodCounter += 1

        #Set current method
        self.currentMethod = id
        typeId = ctx.TYPE_ID().getText()
        entry = {'id': id, 'type': self.currentClass if typeId == 'SELF_TYPE' else typeId, 'value': None, 'scope': 'global', 'belongs': self.currentClass, 'typeParams': [], 'line': ctx.TYPE_ID().getPayload().line, 'col': ctx.TYPE_ID().getPayload().column}
        
        # Check if the class doesn't exist
        add = True
        for symbol in self.symbolTable:
            if symbol['id'] == entry['id'] and symbol['type'] == entry['type'] and symbol['belongs'] == entry['belongs'] and symbol['typeParams']==[formal.TYPE_ID().getText() for formal in ctx.formal()]:
                add = False
                self.errors.append(f'Method {id} has already been declared @ {ctx.TYPE_ID().getPayload().line}')

        #Add entry to table
        if add == True:
            self.symbolTable.append(entry)
        # self.symbolTable.append({
        #     'id': id,
        #     'type': TokenTypes.FUNCTION_ID.value,
        #     'scope': ctx.parentCtx.getRuleContext().TYPE_ID()[0].getText(),
        #     'occurrences': [getOccurrencePosition(ctx.TYPE_ID())],
        #     'variable-type': TokenTypes.FUNCTION_ID.value,
        #     'return-type': typeId,
        #     'props': [{'id': formal.id_().getText(), 'type': formal.TYPE_ID().getText()} for formal in ctx.formal()]
        # })
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#AttributeFeature.
    def visitAttributeFeature(self, ctx):
        id = ctx.id_().getText()
        typeId = ctx.TYPE_ID().getText()

        if typeId == 'Int':
            value = 0
        elif typeId == 'Bool':
            value = False
        elif typeId == 'String':
            value = ""
        else:
            value = None

        entry = {'id': id, 'type': typeId, 'value': value, 'scope': 'global', 'belongs': self.currentClass, 'typeParams': None, 'line': ctx.TYPE_ID().getPayload().line, 'col': ctx.TYPE_ID().getPayload().column}

        # Check if the class doesn't exist
        add = True
        for symbol in self.symbolTable:
            if symbol['id'] == entry['id'] and symbol['scope'] == entry['scope'] and symbol['belongs'] == entry['belongs']:
                print('LLEGAMOS ')
                add = False
                self.errors.append(f'Variable {id} is already defined @ {ctx.id_().OBJECT_ID().getPayload().line}')

        #Add entry to table
        if add == True:
            self.symbolTable.append(entry)
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#formal.
    def visitFormal(self, ctx):

        
        # Add parameters to method on symbol table entry
        for symbol in self.symbolTable:
            # print(symbol)
            if symbol['id'] == self.currentMethod and symbol['belongs'] == self.currentClass and symbol['line'] == ctx.TYPE_ID().getPayload().line:
                if symbol['typeParams'] == None:
                    symbol['typeParams'] = [ctx.TYPE_ID().getText()]
                else:
                    symbol['typeParams'].append(ctx.TYPE_ID().getText())

        id = ctx.id_().getText()
        typeId = ctx.TYPE_ID().getText()

        if typeId == 'Int':
            value = 0
        elif typeId == 'Bool':
            value = False
        elif typeId == 'String':
            value = ""
        else:
            value = None

        entry = {'id': id, 'type': typeId, 'value': value, 'scope': 'local', 'belongs': self.currentMethod, 'typeParams': None, 'line': ctx.TYPE_ID().getPayload().line, 'col': ctx.TYPE_ID().getPayload().column}

        # Check if the class doesn't exist
        add = True
        for symbol in self.symbolTable:
            if symbol['id'] == entry['id'] and symbol['type'] == entry['type'] and symbol['scope'] == entry['scope'] and symbol['belongs'] == entry['type']:
                add = False

        #Add entry to table
        if add == True:
            self.symbolTable.append(entry)


        # If we found a parameter on main method of Class main 
        if self.currentClass == 'Main' and self.currentMethod == 'main':
            self.errors.append(f'main method on class Main must not contain parameters')

        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Add.
    def visitAdd(self, ctx):
        # for child in ctx.getChildren():
            # print('child ',child.getText())
        for node in ctx.expr():
            # print('exp', node.getText())
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
        # bool = ctx.TRUE()
        # if not bool.getText() in self.symbolTable:
        #     self.symbolTable.append({ 'id': bool.getText(), 'type': TokenTypes.BOOL.value, 'occurrences': [getOccurrencePosition(bool) ] })
        # else:
        #     self.symbolTable[bool.getText()]['occurrences'].append(getOccurrencePosition(bool))
        return {'type': 'bool'}


    # Visit a parse tree produced by YAPLParser#String.
    def visitString(self, ctx):
        string = ctx.STRING()
        if not string.getText() in self.symbolTable:
            self.symbolTable.append({ 'id': string.getText(), 'type': TokenTypes.STRING.value, 'occurrences': [getOccurrencePosition(string) ] })
        # else:
        #     self.symbolTable[string.getText()]['occurrences'].append(getOccurrencePosition(string))
        return {'type': 'string'}


    # Visit a parse tree produced by YAPLParser#False.
    def visitFalse(self, ctx):
        bool = ctx.FALSE()
        if not bool.getText() in self.symbolTable:
            self.symbolTable.append({ 'id': bool.getText(), 'type': TokenTypes.BOOL.value, 'occurrences': [getOccurrencePosition(bool) ] })
        # else:
        #     self.symbolTable[bool.getText()]['occurrences'].append(getOccurrencePosition(bool))
        return {'type': 'bool'}


    # Visit a parse tree produced by YAPLParser#Self.
    def visitSelf(self, ctx):
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#FunctionCallBuggy.
    def visitFunctionCallBuggy(self, ctx):
        id = ctx.id_()
        firstExpr = ctx.expr()[0]
        if isinstance(firstExpr, YAPLParser.FunctionCallBuggyContext):
            isDefined = False
            firstExprSymbols = [symbol for symbol in self.symbolTable if symbol['id'] == firstExpr.id_().getText()]
            if len(firstExprSymbols) != 0:
                firstExprSymbol = firstExprSymbols[0]
                idSymbols = [symbol for symbol in self.symbolTable if symbol['id'] == id.getText()]
                if len(idSymbols)>0:
                    idSymbol = idSymbols[0]
                    if idSymbol['belongs'] == firstExprSymbol['type']:
                        isDefined = True
                if not isDefined:
                    self.errors.append(f'Method {id.getText()} does not exist in class {firstExprSymbol["type"]} @ {ctx.id_().OBJECT_ID().getPayload().line}:{ctx.id_().OBJECT_ID().getPayload().column}')
            # else:
            #     self.errors.append(f'{firstExpr.id_().getText()} has not been defined @ {ctx.id_().OBJECT_ID().getPayload().line}:{ctx.id_().OBJECT_ID().getPayload().column}')
            return self.visitChildren(ctx)
            
        isDefined = False
        firstExprSymbols = [symbol for symbol in self.symbolTable if symbol['id'] == firstExpr.getText()]
        if (len(firstExprSymbols) != 0):
            exprSymbol = firstExprSymbols[0]
            exprClass = exprSymbol['type']
            exprClassSymbols = [symbol for symbol in self.symbolTable if symbol['id'] == exprClass]
            if len(exprClassSymbols) == 0:
                return self.visitChildren(ctx)
            exprClassSymbol = exprClassSymbols[0]
            idSymbols = [symbol for symbol in self.symbolTable if symbol['id'] == id.getText() and (symbol['belongs'] == exprSymbol['type'] or symbol['belongs'] == exprClassSymbol['inherits']) and len(symbol['typeParams']) == len(ctx.expr()[1:]) ]
            if len(idSymbols) != 0:
                isDefined = True
            if not isDefined:
                self.errors.append(f'Method {id.getText()} does not exist in class {firstExprSymbols[0]["type"]} @ {id.OBJECT_ID().getPayload().line}')
        else:
            self.errors.append(f'Variable {firstExpr.getText()} called before assignment @ {ctx.id_().OBJECT_ID().getPayload().line} ' )
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Int.
    def visitInt(self, ctx):
        num = ctx.INTEGER()
        if not num.getText() in self.symbolTable:
            self.symbolTable.append({ 'id': num.getText(), 'type': TokenTypes.INT.value, 'occurrences': [getOccurrencePosition(num) ] })
        # else:
        #     self.symbolTable[num.getText()]['occurrences'].append(getOccurrencePosition(num))
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
            # print('hola',node.getText())
            child = self.visit(node)
            # print('child:',child)
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
        id = ctx.id_()
        isDefined = False
        for symbol in self.symbolTable:
            if (symbol['id'] == id.getText() and symbol['typeParams'] != None and (symbol['belongs'] in [self.currentClass, 'IO'] or symbol['scope']=='global')) or id.getText() == self.currentMethod: # Last one is for recursive purposes
                isDefined = True
        if not isDefined:
            self.errors.append(f'Method {id.getText()} called before assignment @{ctx.id_().OBJECT_ID().getPayload().line} ' )
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
        
        id = ctx.id_()[0].getText()
        typeId = ctx.TYPE_ID()[0].getText()

        if typeId == 'Int':
            value = 0
        elif typeId == 'Bool':
            value = False
        elif typeId == 'String':
            value = ""
        else:
            value = None

        entry = {'id': id, 'type': typeId, 'value': value, 'scope': 'local', 'belongs': self.currentMethod, 'typeParams': None, 'line': ctx.TYPE_ID()[0].getPayload().line, 'col': ctx.TYPE_ID()[0].getPayload().column}

        # Check if the class doesn't exist
        add = True
        for symbol in self.symbolTable:
            if symbol['id'] == entry['id'] and symbol['type'] == typeId and symbol['scope'] == entry['scope'] and symbol['belongs'] == entry['belongs']:
                add = False

        #Add entry to table
        if add == True:
            self.symbolTable.append(entry)

        return self.visitChildren(ctx)
