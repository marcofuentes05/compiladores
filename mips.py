from triplet import Triplet
import re
class MIPSCode:
    def __init__(self, threeWayCode, symbolTable):
        self.data = ['.align 2']
        self.text = ['.globl main']
        self.main = []

        # counter = 0
        for index, triplet in enumerate(threeWayCode):
            if triplet.operator == '<-' and not triplet.second_operand:
                self.main.append(f'move {triplet.temporal_value}, {triplet.first_operand}')
            elif triplet.operator == '<-' and triplet.second_operand:
                self.main.append(f'li {triplet.temporal_value}, {triplet.first_operand}')
                # counter += 1
            elif triplet.operator == 'goto' and triplet.second_operand:
                pass
                # f"{self.label} {triplet.operator} {self.first_operand} if {triplet.second_operand}"
            elif triplet.operator == 'goto' and not triplet.second_operand and triplet.temporal_value:
                pass
                # f"{self.label} {triplet.operator} {self.first_operand} # {triplet.temporal_value}"
            elif triplet.operator == 'goto' and not triplet.second_operand:
                pass
                # f"{self.label} {triplet.operator} {self.first_operand}"
            elif not triplet.second_operand:
                pass
                # f"{self.label} {triplet.temporal_value} <- {triplet.operator} {self.first_operand}"
            elif triplet.operator == 'call':
                self.main.append('li $v0, 1')
                self.main.append(f'move $a0, {threeWayCode[index - (int(triplet.second_operand)+1)].temporal_value}')
                self.main.append('syscall')
            else:
                first_operand = triplet.first_operand
                second_operand = triplet.second_operand
                if re.search("^[0-9]*$", triplet.first_operand):
                    first_operand = triplet.second_operand
                    second_operand = triplet.first_operand
                if triplet.operator == '+':
                    self.main.append(f'add {triplet.temporal_value}, {first_operand}, {second_operand}')
                elif triplet.operator == '-':
                    self.main.append(f'sub {triplet.temporal_value}, {first_operand}, {second_operand}')
                elif triplet.operator == '*':
                    self.main.append(f'mul {triplet.temporal_value}, {first_operand}, {second_operand}')
                elif triplet.operator == '/':
                    self.main.append(f'div {triplet.temporal_value}, {first_operand}, {second_operand}')
                



    def getCode(self):
        return_string = ''
        return_string += '.data\n'
        for data in self.data:
            return_string += data + '\n'
        return_string += '.text\n'
        for text in self.text:
            return_string += text + '\n'
        return_string += 'main:\n'
        for main in self.main:
            return_string += main + '\n'
        return return_string