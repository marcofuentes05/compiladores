from distutils.log import error
from antlr4 import *
from antlr4.error.ErrorListener import *
import os

class customErrorListener(ErrorListener):
    ANSI_RESET = "\u001B[0m"
    ANSI_BLACK = "\u001B[30m"
    ANSI_RED = "\u001B[31m"
    ANSI_GREEN = "\u001B[32m"
    ANSI_YELLOW = "\u001B[33m"
    ANSI_BLUE = "\u001B[34m"
    ANSI_PURPLE = "\u001B[35m"
    ANSI_CYAN = "\u001B[36m"
    ANSI_WHITE = "\u001B[37m"

    def syntaxError(self, offendingSymbol, location, line, column, message, e2):
        error_string = f'Syntax error @ {line}:{column} -> {message} '
        with open(f'{os.getcwd()}/instance/syntaxErrors.txt', 'a') as file:
            file.write(f'{error_string}\n')