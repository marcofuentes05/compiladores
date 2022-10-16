# Generated from YAPL.g4 by ANTLR 4.10.1
import pprint
import sys
from enum import Enum
from triplet import ThreeWayCode
from dist.YAPLVisitor import YAPLVisitor
from dist.YAPLParser import YAPLParser

class TokenTypes(Enum):
    CLASS_ID='class-id'
    VARIABLE_ID='variable-id'
    OPERATOR = 'operator'
    INT = 'int'
    BOOL = 'bool'
    STRING = 'string'
    FUNCTION_ID = 'function-id'

MAIN_CLASS_ID = 'Main'

primitive_types = ['Int', 'String', 'Bool']

def getOccurrencePosition(element):
    elementPayload = element.getPayload()
    return f'{elementPayload.line}:{elementPayload.column}'

# This class defines a complete generic visitor for a parse tree produced by YAPLParser.

class YAPLTree(YAPLVisitor):
    def __init__(self):
        YAPLVisitor.__init__(self)
        self.threeWayCode = ThreeWayCode()
        self.symbolTable = [
            {'id': 'String', 'type': 'class', 'value': None, 'scope': None, 'belongs': None, 'typeParams': None, 'line': None, 'col': None, 'inherits': None, 'size': '8', 'memory': None, 'position': None, 'register': None},
            {'id': 'Int', 'type': 'class', 'value': None, 'scope': None, 'belongs': None, 'typeParams': None, 'line': None, 'col': None, 'inherits': None, 'size': '8', 'memory': None, 'position': None, 'register': None},
            {'id': 'Bool', 'type': 'class', 'value': None, 'scope': None, 'belongs': None, 'typeParams': None, 'line': None, 'col': None, 'inherits': None, 'size': '1', 'memory': None, 'position': None, 'register': None},
            {'id': 'IO', 'type': 'class', 'value': None, 'scope': None, 'belongs': None, 'typeParams': None, 'line': None, 'col': None, 'inherits': None, 'size': None, 'memory': None, 'position': None, 'register': None},
            {'id': 'in_string', 'type': 'String', 'value': None, 'scope': 'global', 'belongs': 'IO', 'typeParams': ['String'], 'line': None, 'col': None, 'inherits': None, 'size': None, 'memory': None, 'position': None, 'register': None},
            {'id': 'out_string', 'type': 'SELF_TYPE', 'value': None, 'scope': 'global', 'belongs': 'IO', 'typeParams': ['String'], 'line': None, 'col': None, 'inherits': None, 'size': None, 'memory': None, 'position': None, 'register': None},
            {'id': 'in_int', 'type': 'Int', 'value': None, 'scope': 'global', 'belongs': 'IO', 'typeParams': ['Int'], 'line': None, 'col': None, 'inherits': None, 'size': None, 'memory': None, 'position': None, 'register': None},
            {'id': 'out_int', 'type': 'SELF_TYPE', 'value': None, 'scope': 'global', 'belongs': 'IO', 'typeParams': ['Int'], 'line': None, 'col': None, 'inherits': None, 'size': None, 'memory': None, 'position': None, 'register': None},
            {'id': 'length', 'type': 'Int', 'value': None, 'scope': 'global', 'belongs': 'String', 'typeParams': [], 'line': None, 'col': None, 'inherits': None, 'size': None, 'memory': None, 'position': None, 'register': None},
            {'id': 'concat', 'type': 'String', 'value': None, 'scope': 'global', 'belongs': 'String', 'typeParams': ['String'], 'line': None, 'col': None, 'inherits': None, 'size': None, 'memory': None, 'position': None, 'register': None},
            {'id': 'substr', 'type': 'String', 'value': None, 'scope': 'global', 'belongs': 'String', 'typeParams': ['Int', 'Int'], 'line': None, 'col': None, 'inherits': None, 'size': None, 'memory': None, 'position': None, 'register': None}
        ]
        self.errors = []

        self.labels = []

        self.mainClassCounter = 0
        self.mainMethodCounter = 0

        self.currentClass = ''
        self.currentMethod = ''

    def new_label(self):
        label = "L" + str(len(self.labels)) + '  '
        self.labels.append(label)

        return label

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
        if len(ctx.TYPE_ID()) > 1:
            if ctx.TYPE_ID()[1].getText() in primitive_types:
                self.errors.append(f"Can't inherit from primitive type")
                # add = False
            # check if is recursive inheritance
            elif ctx.TYPE_ID()[1].getText() == self.currentClass:
                self.errors.append(f"Can't do recursive inheritance") 


                # add = False
            elif len([symbol for symbol in self.symbolTable if ctx.TYPE_ID()[1].getText()== symbol['id']]) == 0:
                self.errors.append(f'Inherited class {ctx.TYPE_ID()[1].getText()} does not exist')
                # add = False
            else:
                inheritedClass = ctx.TYPE_ID()[1].getText()

        # class to be added to the table
        entry = {'id': self.currentClass, 'type': 'class', 'value': None, 'scope': None, 'belongs': None, 'typeParams': None, 'line': ctx.TYPE_ID()[0].getPayload().line, 'col': ctx.TYPE_ID()[0].getPayload().column, 'inherits': inheritedClass, 'size': None, 'memory': None, 'position': None, 'register': None}

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
        #Check if variable has been declared
        id = ctx.getText()
        symbol = None        
        for sym in self.symbolTable:
            if sym['id'] == id  and sym['belongs'] == self.currentMethod:
                symbol = sym
        if symbol == None:
            for sym in self.symbolTable:
                    if sym['id'] == id  and sym['belongs']:
                        symbol = sym    
        if(ctx.getText()=='self'):
                return {'type':self.currentClass}
        elif(symbol==None):
            if ctx.getText() != 'out_int':
                self.errors.append(f"{ctx.getText()} has not been declared @ {ctx.start.line}")
            return {'type': 'Error'}
        return {'type':symbol['type'], 'symbol': symbol}
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#MethodFeature.
    def visitMethodFeature(self, ctx):
        #Get method name
        ident = ctx.id_().getText()
        #See if there is only 1 main method on Main class
        if self.currentClass == 'Main' and ident == 'main':
            self.mainMethodCounter += 1

        #Set current method
        self.currentMethod = ident
        typeId = ctx.TYPE_ID().getText()
        if typeId == 'Int' or typeId == 'Bool':
            entry = {'id': ident, 'type': self.currentClass if typeId == 'SELF_TYPE' else typeId, 'value': None, 'scope': 'global', 'belongs': self.currentClass, 'typeParams': [], 'line': ctx.TYPE_ID().getPayload().line, 'col': ctx.TYPE_ID().getPayload().column, 'inherits': None, 'size': sys.getsizeof(id) / 8, 'memory': 'Global', 'position': hex(id(ident)), 'register': None}
        elif typeId == 'String':
            entry = {'id': ident, 'type': self.currentClass if typeId == 'SELF_TYPE' else typeId, 'value': None, 'scope': 'global', 'belongs': self.currentClass, 'typeParams': [], 'line': ctx.TYPE_ID().getPayload().line, 'col': ctx.TYPE_ID().getPayload().column, 'inherits': None, 'size': len(ident), 'memory': 'Global', 'position': hex(id(ident)), 'register': None}
        else:
            entry = {'id': ident, 'type': self.currentClass if typeId == 'SELF_TYPE' else typeId, 'value': None, 'scope': 'global', 'belongs': self.currentClass, 'typeParams': [], 'line': ctx.TYPE_ID().getPayload().line, 'col': ctx.TYPE_ID().getPayload().column, 'inherits': None, 'size': None, 'memory': None, 'position': None, 'register': None}

        
        # Check if the class doesn't exist
        add = True
        for symbol in self.symbolTable:
            if symbol['id'] == entry['id'] and symbol['type'] == entry['type'] and symbol['belongs'] == entry['belongs'] and symbol['typeParams']==[formal.TYPE_ID().getText() for formal in ctx.formal()]:
                add = False
                self.errors.append(f'Method {ident} has already been declared @ {ctx.TYPE_ID().getPayload().line}')

        #Add entry to table
        if add == True:
            self.symbolTable.append(entry)
            # for formal in ctx.formal():
            #     formal_entry = {'id': formal.id_().getText(), 'type': formal.TYPE_ID().getText(), 'value': None, 'scope': 'global', 'belongs': ident, 'typeParams': None, 'line': ctx.TYPE_ID().getPayload().line, 'col': ctx.TYPE_ID().getPayload().column, 'inherits': None, 'size': None, 'memory': None, 'position': None}
            #     self.symbolTable.append(formal_entry)
        # expr = self.visit(ctx.expr())

        # expr = self.visit(ctx.expr())

        # if expr['triplet']:
        #     expr['triplet'].label = self.new_label()

        #     triplet, temporal_value = self.threeWayCode.add('goto', expr['triplet'].label)
        # else:
        #     triplet, temporal_value = self.threeWayCode.add('goto', expr['value'])

        self.visit(ctx.id_())
        for formal in ctx.formal():
            self.visit(formal)
            
        expr = self.visit(ctx.expr())

        if expr['triplet']:
            expr['triplet'].label = self.new_label()
            triplet, temporal_value = self.threeWayCode.add('goto', expr['triplet'].label, None, None, ctx.id_().getText())
        else:
            triplet, temporal_value = self.threeWayCode.add('goto', expr['value'], None, None, ctx.id_().getText())

        # return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#AttributeFeature.
    def visitAttributeFeature(self, ctx):
        ident = ctx.id_().getText()
        typeId = ctx.TYPE_ID().getText()

        #If expression exists Check if type expression type is equal to mehtod type
        valType = None
        newValue = None
        if ctx.expr() != None:
            val = self.visit(ctx.expr())
            valType = val['type']
            newValue = val['value']
            print(valType)

        if typeId == 'Int':
            value = 0
        elif typeId == 'Bool':
            value = False
        elif typeId == 'String':
            value = ""
        else:
            value = None

        triplet, temporal_value = self.threeWayCode.add('<-', newValue if newValue else value, ident)

        if ctx.expr() != None:
            if typeId != valType:
                self.errors.append(f"Can't assign {valType} to  variable type {typeId} @ {ctx.TYPE_ID().getPayload().line}")

        if typeId == 'Int' or typeId == 'Bool':
            entry = {'id': ident, 'type': typeId, 'value': newValue if newValue else value, 'scope': 'global', 'belongs': self.currentClass, 'typeParams': None, 'line': ctx.TYPE_ID().getPayload().line, 'col': ctx.TYPE_ID().getPayload().column, 'inherits': None, 'size': sys.getsizeof(id) / 8, 'memory': 'Global', 'position': hex(id(ident)), 'register': triplet.temporal_value}
        elif typeId == 'String':
            entry = {'id': ident, 'type': typeId, 'value': newValue if newValue else value, 'scope': 'global', 'belongs': self.currentClass, 'typeParams': None, 'line': ctx.TYPE_ID().getPayload().line, 'col': ctx.TYPE_ID().getPayload().column, 'inherits': None, 'size': len(newValue) if newValue else len(value), 'memory': 'Global', 'position': hex(id(ident)), 'register': triplet.temporal_value}
        else:
            entry = {'id': ident, 'type': typeId, 'value': newValue if newValue else value, 'scope': 'global', 'belongs': self.currentClass, 'typeParams': None, 'line': ctx.TYPE_ID().getPayload().line, 'col': ctx.TYPE_ID().getPayload().column, 'inherits': None, 'size': None, 'memory': 'Global', 'position': None, 'register': triplet.temporal_value}


        # Check if the class doesn't exist
        add = True
        for symbol in self.symbolTable:
            if symbol['id'] == entry['id'] and symbol['scope'] == entry['scope'] and symbol['belongs'] == entry['belongs']:
                add = False
                self.errors.append(f'Variable {ident} is already defined @ {ctx.id_().OBJECT_ID().getPayload().line}')

        #Add entry to table
        if add == True:
            self.symbolTable.append(entry)


        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#formal.
    def visitFormal(self, ctx):
        # Add parameters to method on symbol table entry
        for symbol in self.symbolTable:
            if symbol['id'] == self.currentMethod and symbol['belongs'] == self.currentClass and symbol['line'] == ctx.TYPE_ID().getPayload().line:
                symbol['typeParams'].append(ctx.TYPE_ID().getText())

        ident = ctx.id_().getText()
        typeId = ctx.TYPE_ID().getText()

        if typeId == 'Int':
            value = 0
        elif typeId == 'Bool':
            value = False
        elif typeId == 'String':
            value = ""
        else:
            value = None

        if typeId == 'Int' or typeId == 'Bool':
            entry = {'id': ident, 'type': typeId, 'value': value, 'scope': 'local', 'belongs': self.currentMethod, 'typeParams': None, 'line': ctx.TYPE_ID().getPayload().line, 'col': ctx.TYPE_ID().getPayload().column, 'inherits': None, 'size': sys.getsizeof(id) / 8, 'memory': 'Stack', 'position': hex(id(ident)), 'register': None}
        elif typeId == 'String':
            entry = {'id': ident, 'type': typeId, 'value': value, 'scope': 'global', 'belongs': self.currentClass, 'typeParams': None, 'line': ctx.TYPE_ID().getPayload().line, 'col': ctx.TYPE_ID().getPayload().column, 'inherits': None, 'size': len(ident), 'memory': 'Stack', 'position': hex(id(ident)), 'register': None}
        else:
            entry = {'id': ident, 'type': typeId, 'value': value, 'scope': 'local', 'belongs': self.currentMethod, 'typeParams': None, 'line': ctx.TYPE_ID().getPayload().line, 'col': ctx.TYPE_ID().getPayload().column, 'inherits': None, 'size': None, 'memory': None, 'position': None, 'register': None}

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
        expr1 = self.visit(ctx.expr()[0])
        expr2 = self.visit(ctx.expr()[1])

        triplet, temporal_value = self.threeWayCode.add(ctx.PLUS_SIGN().getText(), expr1['value'] if expr1['value'] else expr1['id'], expr2['value'] if expr2['value'] else expr2['id'])


        if 'idType' in expr1:
                if expr1['idType'] != 'Int':
                    self.errors.append(f"Can't assign type Int to variable type { expr1['idType']} @ {ctx.start.line}")

        if 'idType' in expr2:
                if expr2['idType'] != 'Int':
                    self.errors.append(f"Can't assign type Int to variable type { expr2['idType']} @ {ctx.start.line}")

        #Implicit cast from bool to int
        if(expr1['type']=='Bool'):
            expr1['type'] = 'Int'
                
        if(expr1['type']!='Int' and expr1['type']!='Bool'):
            self.errors.append('Invalid type ' + expr1['type'] + f' with operant "+" @ {ctx.start.line}')
            return {'type': 'Error', 'value': 'Error', 'triplet': None}

        if(expr2['type']=='Bool'):
            expr2['type'] = 'Int'
                
        if(expr2['type']!='Int' and expr2['type']!='Bool'):
            self.errors.append('Invalid type ' + expr2['type'] + f' with operant "+" @ {ctx.start.line}')
            return {'type': 'Error', 'value': 'Error', 'triplet': None}

        return {'type':'Int', 'triplet': triplet, 'value': temporal_value}
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#New.
    def visitNew(self, ctx):
        
        for symbol in self.symbolTable:
            if symbol['id'] == ctx.TYPE_ID().getText():
                triplet, temporal_value = self.threeWayCode.add(ctx.NEW().getText(), ctx.TYPE_ID().getText())
                return {'type': ctx.TYPE_ID().getText(), 'triplet': triplet, 'value': temporal_value}
        return {'type': None}
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#NotOrMinus.
    def visitNotOrMinus(self, ctx):
        sign = ctx.MINUS_SIGN() if ctx.MINUS_SIGN() else ctx.NOT_SIGN()

        expr = self.visit(ctx.expr())

        triplet, temporal_value = self.threeWayCode.add(sign, expr['value'])

        if sign == ctx.MINUS_SIGN():
            return {'type': 'Int', 'value': temporal_value, 'triplet': triplet}
        else:
            return {'type': 'Bool', 'value': temporal_value, 'triplet': triplet}

        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#IfElse.
    def visitIfElse(self, ctx):

        condition = self.visit(ctx.expr()[0])

        terceto_not, temp_not = self.threeWayCode.add('not', condition['value'])

        then = self.visit(ctx.expr()[1])
        then_label = self.new_label()
        then['triplet'].label = then_label
        else_exp = self.visit(ctx.expr()[2])
        else_label = self.new_label()
        else_exp['triplet'].label = else_label

        terceto_if, temp_if = self.threeWayCode.add('goto', then_label, condition['value'])

        terceto_else, temp_else = self.threeWayCode.add('goto', else_label, temp_not)

        return {'value': temp_if, 'triplet': terceto_if}

        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#True.
    def visitTrue(self, ctx):
        return {'type': 'Bool', 'value': ctx.getText(), 'triplet': None}


    # Visit a parse tree produced by YAPLParser#String.
    def visitString(self, ctx):
        return {'type': 'String', 'triplet': None, 'value': ctx.getText()}


    # Visit a parse tree produced by YAPLParser#False.
    def visitFalse(self, ctx):
        return {'type': 'Bool', 'value': ctx.getText(), 'triplet': None}


    # Visit a parse tree produced by YAPLParser#Self.
    def visitSelf(self, ctx):
        return {'type': 'self', 'triplet': None, 'value': ctx.getTExt()}

    # Visit a parse tree produced by YAPLParser#FunctionCall.
    def visitFunctionCall(self, ctx):
        id = ctx.id_()
        isDefined = False
        functionSymbol = None
        for symbol in self.symbolTable:
            if (symbol['id'] == id.getText() and symbol['typeParams'] != None and (symbol['belongs'] in [self.currentClass, 'IO'] or symbol['scope']=='global')):
                isDefined = True
                functionSymbol = symbol
        if not isDefined:
            self.errors.append(f'Method {id.getText()} called before assignment @{ctx.id_().OBJECT_ID().getPayload().line}:{ctx.id_().OBJECT_ID().getPayload().column} ' )
            return {'idType': 'Error', 'value': None}
        if functionSymbol == None or functionSymbol['typeParams'] == None:
            pass
        elif len(functionSymbol['typeParams']) != len(ctx.expr()):
            self.errors.append(f'Method {id.getText()} expected {len(functionSymbol["typeParams"])} param, but got {len(ctx.expr())} @{ctx.id_().OBJECT_ID().getPayload().line}:{ctx.id_().OBJECT_ID().getPayload().column}')
        else:
            expectedParams = functionSymbol['typeParams']
            for index, param in enumerate(ctx.expr()):
                paramObj = self.visit(param)
                if paramObj['type'] == expectedParams[index]:
                    pass
                else:
                    self.errors.append(f"Method {id.getText()} expected {expectedParams[index]} as its param number {index+1}, but got {paramObj['type']} instead @{ctx.id_().OBJECT_ID().getPayload().line}:{ctx.id_().OBJECT_ID().getPayload().column}")
                triplet, temporal_value = self.threeWayCode.add('param', paramObj['value'] if 'value' in paramObj.keys() else param.getText())
            triplet, temporal_value = self.threeWayCode.add('call', ctx.id_().getText(), len(ctx.expr()))
            # for param in ctx.expr():
        if isDefined:
            return { **functionSymbol, 'idType': functionSymbol['type']}

    # Visit a parse tree produced by YAPLParser#FunctionCallBuggy.
    def visitFunctionCallBuggy(self, ctx):
        return_value = {'type': None}
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
                        passedParamsList = ctx.expr()[1:]
                        for param in passedParamsList:
                            triplet, temporal_value = self.threeWayCode.add('param', param.getText())
                        triplet, temporal_value = self.threeWayCode.add('call', id.getText(), len(passedParamsList))
                        

                        if idSymbol['typeParams'] == None:
                            pass
                        elif len(idSymbols[0]['typeParams']) != len(passedParamsList):
                            self.errors.append(f'Method {id.getText()} expected {len(idSymbols[0]["typeParams"])} param, but got {len(ctx.expr()[1:])} @{ctx.id_().OBJECT_ID().getPayload().line}:{ctx.id_().OBJECT_ID().getPayload().column}')
                        else:
                            expectedParams = idSymbols[0]['typeParams']
                            for index, param in enumerate(passedParamsList):
                                paramObj = self.visit(param)
                                if paramObj['type'] == expectedParams[index]:
                                    pass
                                else:
                                    self.errors.append(f"Method {id.getText()} expected {expectedParams[index]} as its param number {index+1}, but got {paramObj['type']} instead @{ctx.id_().OBJECT_ID().getPayload().line}:{ctx.id_().OBJECT_ID().getPayload().column}")
                        return_value = { **idSymbol, 'type': idSymbol['type'] }
                        
                if not isDefined:
                    self.errors.append(f'Method {id.getText()} does not exist in class {firstExprSymbol["type"]} @ {ctx.id_().OBJECT_ID().getPayload().line}:{ctx.id_().OBJECT_ID().getPayload().column}')
                    return_value = {'type': 'Error'}

            else:
                self.errors.append(f'{firstExpr.id_().getText()} has not been defined @ {ctx.id_().OBJECT_ID().getPayload().line}:{ctx.id_().OBJECT_ID().getPayload().column}')
                # return self.visitChildren(ctx)
                return_value = {'type': 'Error'}
            self.visitChildren(ctx)
            return return_value
            
        isDefined = False
        firstExprSymbols = [symbol for symbol in self.symbolTable if symbol['id'] == firstExpr.getText()]
        if (len(firstExprSymbols) != 0):
            exprSymbol = firstExprSymbols[0]
            exprClass = exprSymbol['type']
            exprClassSymbols = [symbol for symbol in self.symbolTable if symbol['id'] == exprClass]
            if len(exprClassSymbols) == 0:
                return_value = {'type': 'Error'}
            exprClassSymbol = exprClassSymbols[0]
            idSymbols = [symbol for symbol in self.symbolTable if symbol['id'] == id.getText() and (symbol['belongs'] == exprSymbol['type'] or symbol['belongs'] == exprClassSymbol['inherits'])]
            if len(idSymbols) != 0:
                isDefined = True
                for param in ctx.expr()[1:]:
                    triplet, temporal_value = self.threeWayCode.add('param', param.getText())
                triplet, temporal_value = self.threeWayCode.add('call', id.getText(), len(idSymbols[0]['typeParams']))

                return_value = { 'type' : idSymbols[0]['type']}
                lastExpressions = ctx.expr()[1:] #estos son los parametros de la funcion
                if idSymbols[0]['typeParams'] == None:
                    pass
                elif len(idSymbols[0]['typeParams']) != len(lastExpressions):
                    self.errors.append(f'Method {id.getText()} expected {len(idSymbols[0]["typeParams"])} param, but got {len(ctx.expr()[1:])} @{ctx.id_().OBJECT_ID().getPayload().line}:{ctx.id_().OBJECT_ID().getPayload().column}')
                else:
                    expectedParams = idSymbols[0]['typeParams']
                    for index, param in enumerate(lastExpressions):
                        paramObj = self.visit(param)
                        if paramObj['type'] == expectedParams[index]:
                            pass
                        else:
                            self.errors.append(f"Method {id.getText()} expected {expectedParams[index]} as its param number {index+1}, but got {paramObj['type']} instead @{ctx.id_().OBJECT_ID().getPayload().line}:{ctx.id_().OBJECT_ID().getPayload().column}")
            if not isDefined:
                self.errors.append(f'Method {id.getText()} does not exist in class {firstExprSymbols[0]["type"]} @ {id.OBJECT_ID().getPayload().line}')
                return_value = { 'type': 'Error'}
        else:
            self.errors.append(f'Variable {firstExpr.getText()} called before assignment @ {ctx.id_().OBJECT_ID().getPayload().line} ' )
        self.visitChildren(ctx)
        return return_value


    # Visit a parse tree produced by YAPLParser#Int.
    def visitInt(self, ctx):
        return {'type': 'Int', 'triplet': None, 'value': ctx.getText()}


    # Visit a parse tree produced by YAPLParser#Divide.
    def visitDivide(self, ctx):
        expr1 = self.visit(ctx.expr()[0])
        expr2 = self.visit(ctx.expr()[1])

        triplet, temporal_value = self.threeWayCode.add(ctx.DIVIDE_SIGN().getText(), expr1['value'] if expr1['value'] else expr1['id'], expr2['value'] if expr2['value'] else expr2['id'])

        if 'idType' in expr1:
                if expr1['idType'] != 'Int':
                    self.errors.append(f"Can't assign type Int to variable type { expr1['idType']} @ {ctx.start.line}")

        if 'idType' in expr2:
                if expr2['idType'] != 'Int':
                    self.errors.append(f"Can't assign type Int to variable type { expr2['idType']} @ {ctx.start.line}")

        #Impicit cast from bool to int
        if(expr1['type']=='Bool'):
            expr1['type'] = 'Int'
                
        if(expr1['type']!='Int' and expr1['type']!='Bool'):
            self.errors.append('Invalid type ' + expr1['type'] + f' with operant "/" @ {ctx.start.line}')
            return {'type': 'Error', 'value': 'Error', 'triplet': None}

        if(expr2['type']=='Bool'):
            expr2['type'] = 'Int'
                
        if(expr2['type']!='Int' and expr2['type']!='Bool'):
            self.errors.append('Invalid type ' + expr2['type'] + f' with operant "/" @ {ctx.start.line}')
            return {'type': 'Error', 'value': 'Error', 'triplet': None}

        return {'type':'Int', 'triplet': triplet, 'value': temporal_value}


    # Visit a parse tree produced by YAPLParser#Parenthesis.
    def visitParenthesis(self, ctx):
        child = self.visit(ctx.expr())
        triplet, temporal_value = self.threeWayCode.add('<-',  child['value'] )
        
        return {'type':child['type'], 'triplet': triplet, 'value': temporal_value}


    # Visit a parse tree produced by YAPLParser#LessThan.
    def visitLessThan(self, ctx):
        expr0 = self.visit(ctx.expr()[0]) 
        expr1 = self.visit(ctx.expr()[1])
        triplet, temporal_value = self.threeWayCode.add('<', expr0['value'], expr1['value'])
        return {'type': 'Bool', 'triplet': triplet, 'value': temporal_value}
        


    # Visit a parse tree produced by YAPLParser#Identifier.
    def visitIdentifier(self, ctx):
        result = self.visit(ctx.id_())
        return {'type': result['type'], 'triplet': None, 'value': ctx.id_().getText()}


    # Visit a parse tree produced by YAPLParser#Brackets.
    def visitBrackets(self, ctx):
        expressions_count = len(ctx.expr())
        for expression in ctx.expr():
            expressions_count -= 1
            # expr = self.visit(expression)
            # if(expressions_count==0):
            #     return expr
            if expression == ctx.expr()[0]:
                expr0 = self.visit(ctx.expr()[0])
            else:
                expr = self.visit(expression)
        return {'type':'Object', 'triplet': expr0['triplet'], 'value': expr0['value']}
        return {'type': 'Object'}
        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Equal.
    def visitEqual(self, ctx):
        expr0 = self.visit(ctx.expr()[0]) 
        expr1 = self.visit(ctx.expr()[1])
        triplet, temporal_value = self.threeWayCode.add('=', expr0['value'], expr1['value'])
        return {'type': 'Bool', 'triplet': triplet, 'value': temporal_value}


    # Visit a parse tree produced by YAPLParser#Multiply.
    def visitMultiply(self, ctx):
        expr1 = self.visit(ctx.expr()[0])
        expr2 = self.visit(ctx.expr()[1])

        triplet, temporal_value = self.threeWayCode.add(ctx.MULTIPLY_SIGN().getText(), expr1['value'] if expr1['value'] else expr1['id'], expr2['value'] if expr2['value'] else expr2['id'])

        if 'idType' in expr1:
            if expr1['idType'] != 'Int':
                self.errors.append(f"Can't assign type Int to variable type { expr1['idType']} @ {ctx.start.line}")

        if 'idType' in expr2:
            if expr2['idType'] != 'Int':
                self.errors.append(f"Can't assign type Int to variable type { expr1['idType']} @ {ctx.start.line}")

        #Implicit cast from bool to int 
        if (expr1['type'] == 'Bool'):
            expr1['type'] = 'Int'
        
        if(expr1['type']!='Int' and expr1['type']!='Bool'):
                self.errors.append('Invalid type ' + expr1['type'] + f' with operant "*" @ {ctx.start.line}')
                return {'type': 'Error', 'value': 'Error', 'triplet': None}

        if (expr2['type'] == 'Bool'):
            expr2['type'] = 'Int'
        
        if(expr2['type']!='Int' and expr2['type']!='Bool'):
                self.errors.append('Invalid type ' + expr2['type'] + f' with operant "*" @ {ctx.start.line}')
                return {'type': 'Error', 'value': 'Error', 'triplet': None}

        return {'type':'Int', 'triplet': triplet, 'value': temporal_value}


    # Visit a parse tree produced by YAPLParser#LessEqualThan.
    def visitLessEqualThan(self, ctx):
        expr0 = self.visit(ctx.expr()[0]) 
        expr1 = self.visit(ctx.expr()[1])
        triplet, temporal_value = self.threeWayCode.add('<=', expr0['value'], expr1['value'])
        return {'type': 'Bool', 'triplet': triplet, 'value': temporal_value}
        # return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Declaration.
    def visitDeclaration(self, ctx):
        id = self.visit(ctx.id_())
        value = self.visit(ctx.expr()) 
        triplet, temporal_value = self.threeWayCode.add('<-', value['value'], ctx.id_().getText(), None, None)
        if id['type'] == 'String' and value['type'] != 'String':
            self.errors.append(f"Can't assign type {value['type']} to variable type { id['type']} @ {ctx.start.line}")
        if id['type'] != value['type']:
            if(id['type']=='Int' and value['type']=='Bool'):
                return {'type': 'Bool', 'idType': id['type'], 'triplet': triplet, 'value': temporal_value}
            elif(id['type']=='Bool' and value['type']=='Int'):
                return {'type': 'Int', 'idType': id['type'], 'triplet': triplet, 'value': temporal_value}
            else:
                # self.errors.append(f'Static type of expression should be the same or an inherited type {ctx.start.line}')
                return {'type': value['type'], 'idType': id['type'], 'triplet': triplet, 'value': temporal_value}

        return {'type': value['type'], 'idType': id['type'], 'triplet': triplet, 'value': temporal_value}
        # return self.visitChildren(ctx)

    # Visit a parse tree produced by YAPLParser#While.
    def visitWhile(self, ctx):

        condition = self.visit(ctx.expr()[0])

        content = self.visit(ctx.expr()[1])
        content_label = self.new_label()
        content['triplet'].label = content_label

        while_triplet, temporal_value = self.threeWayCode.add('goto', content_label, condition['value'])

        return {'value': temporal_value, 'triplet': while_triplet}


    # Visit a parse tree produced by YAPLParser#Substract.
    def visitSubstract(self, ctx):
        expr1 = self.visit(ctx.expr()[0])
        expr2 = self.visit(ctx.expr()[1])

        triplet, temporal_value = self.threeWayCode.add(ctx.MINUS_SIGN().getText(), expr1['value'] if expr1['value'] else expr1['id'], expr2['value'] if expr2['value'] else expr2['id'])

        if 'idType' in expr1:
                if expr1['idType'] != 'Int':
                    self.errors.append(f"Can't assign type Int to variable type { expr1['idType']} @ {ctx.start.line}")

        if 'idType' in expr2:
                if expr2['idType'] != 'Int':
                    self.errors.append(f"Can't assign type Int to variable type { expr2['idType']} @ {ctx.start.line}")

        #Impicit cast from bool to int
        if(expr1['type']=='Bool'):
            expr1['type'] = 'Int'
                
        if(expr1['type']!='Int' and expr1['type']!='Bool'):
            self.errors.append('Invalid type ' + expr1['type'] + f' with operant "-" @ {ctx.start.line}')
            return {'type': 'Error', 'value': 'Error', 'triplet': None}    

        if(expr2['type']=='Bool'):
            expr2['type'] = 'Int'
                
        if(expr2['type']!='Int' and expr2['type']!='Bool'):
            self.errors.append('Invalid type ' + expr2['type'] + f' with operant "-" @ {ctx.start.line}')
            return {'type': 'Error', 'value': 'Error', 'triplet': None}         
        
        return {'type':'Int', 'triplet': triplet, 'value': temporal_value}

    # Visit a parse tree produced by YAPLParser#IsVoid.
    def visitIsVoid(self, ctx):
        expr = self.visit(ctx.expr())
        triplet, temporal_value = self.threeWayCode.add(ctx.ISVOID().getText(), expr['value'])
        return {'type': 'Bool', 'value': temporal_value, 'triplet': triplet}

    # Visit a parse tree produced by YAPLParser#Not.
    def visitNot(self, ctx):
        expr = self.visit(ctx.expr())

        triplet, temporal_value = self.threeWayCode.add(ctx.NOT().getText(), expr['value'])

        return {'type': 'Bool', 'value': temporal_value, 'triplet': triplet}

        return self.visitChildren(ctx)


    # Visit a parse tree produced by YAPLParser#Let.

    def visitLet(self, ctx):
        ident = ctx.id_()[0].getText()
        type_id = ctx.TYPE_ID()[0].getText()

        if type_id == 'Int':
            value = 0
        elif type_id == 'Bool':
            value = False
        elif type_id == 'String':
            value = ""
        else:
            value = None

        if type_id == 'Int' or type_id == 'Bool':
            entry = {'id': ident, 'type': type_id, 'value': value, 'scope': 'local', 'belongs': self.currentMethod, 'typeParams': None, 'line': ctx.TYPE_ID()[0].getPayload().line, 'col': ctx.TYPE_ID()[0].getPayload().column, 'inherits': None, 'size': sys.getsizeof(ident), 'memory': 'Stack', 'position': hex(id(ident))}
        elif type_id == 'String':
            entry = {'id': ident, 'type': type_id, 'value': value, 'scope': 'global', 'belongs': self.currentClass, 'typeParams': None, 'line': ctx.TYPE_ID().getPayload().line, 'col': ctx.TYPE_ID().getPayload().column, 'inherits': None, 'size': len(ident), 'memory': 'Stack', 'position': hex(id(ident))}
        else:
            entry = {'id': ident, 'type': type_id, 'value': value, 'scope': 'local', 'belongs': self.currentMethod, 'typeParams': None, 'line': ctx.TYPE_ID()[0].getPayload().line, 'col': ctx.TYPE_ID()[0].getPayload().column, 'inherits': None, 'size': None, 'memory': None, 'position': None}
            
        # Check if the class doesn't exist
        add = True
        for symbol in self.symbolTable:
            if symbol['id'] == entry['id'] and symbol['type'] == type_id and symbol['scope'] == entry['scope'] and symbol['belongs'] == entry['belongs']:
                add = False
        # Add entry to table
        if add:
            self.symbolTable.append(entry)
        for expression in ctx.expr():
            self.visit(expression)
        triplet, temporal_value = self.threeWayCode.add('LET', ident)
        return{'type': 'Int', 'triplet': triplet, 'value': temporal_value }
        # return self.visitChildren(ctx)
