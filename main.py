# from ast import walk
import pprint
import sys
from antlr4 import *
from antlr4.tree.Trees import Trees
from YAPLTree import YAPLTree
from dist.YAPLLexer import YAPLLexer
from dist.YAPLParser import YAPLParser
from customErrorListener import customErrorListener

def main(argv):
    input = FileStream(argv[1])
    # input = FileStream('./02fibonacci.yapl')

    lexer = YAPLLexer(input)
    lexer.removeErrorListeners()
    lexer.addErrorListener(customErrorListener())
    stream = CommonTokenStream(lexer)
    stream.fill()

    # print("Tokens:")
    # for token in stream.tokens:
        # print(token)

    parser = YAPLParser(stream)
    parser.removeErrorListeners()
    parser.addErrorListener(customErrorListener())

    tree = parser.prog()
    visitor = YAPLTree()
    # visitor.symbolTable()
    visitor.visit(tree)

    # print("\nTabla de simbolos:")
    # pprint.pp(visitor.symbolTable)
    pprint.pp([str(tr) for tr in visitor.threeWayCode.triplets])
    print('ERRORS:')
    print(visitor.errors)

if __name__ == '__main__':
    main(sys.argv)
