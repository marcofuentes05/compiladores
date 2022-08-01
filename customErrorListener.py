from antlr4 import *
from antlr4.error.ErrorListener import *

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

    def syntaxError(self, offendingSymbol, line, character, message, e):
        print(self.ANSI_YELLOW + "Error en " + str(line) + " @ " + str(character) + ":\t" + str(message) + self.ANSI_RESET)