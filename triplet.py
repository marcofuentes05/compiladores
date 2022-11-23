import random

class Triplet:
    def __init__(self, operator, first_operand, second_operand=None, label=None, temporal_value=None):
        self.operator = operator
        self.first_operand = first_operand
        self.second_operand = second_operand
        self.label = label
        self.temporal_value = temporal_value

    def __str__(self):
        if not self.label:
            self.label = '    '

        if self.operator == '<-' and not self.second_operand:
            return f"{self.label} {self.temporal_value} {self.operator} {self.first_operand} "
        elif self.operator == '<-' and self.second_operand:
            return f"{self.label} {self.temporal_value} {self.operator} {self.first_operand} # {self.second_operand}"
        elif self.operator == 'goto' and self.second_operand:
            return f"{self.label} {self.operator} {self.first_operand} if {self.second_operand}"
        elif self.operator == 'goto' and not self.second_operand and self.temporal_value:
            return f"{self.label} {self.operator} {self.first_operand} # {self.temporal_value}"
        elif self.operator == 'goto' and not self.second_operand:
            return f"{self.label} {self.operator} {self.first_operand}"
        elif not self.second_operand:
            return f"{self.label} {self.temporal_value} <- {self.operator} {self.first_operand}"
        elif self.operator == 'call':
            return f"{self.label} {self.temporal_value} <- {self.operator} {self.first_operand} {self.second_operand}"
        return f"{self.label} {self.temporal_value} <- {self.first_operand} {self.operator} {self.second_operand}"

class ThreeWayCode:
    def __init__(self):
        self.triplets: list[Triplet] = []

    def add(self, operator, first_operand, second_operand=None, label=None, temporal_value=None):
        triplet = Triplet(operator, first_operand, second_operand, label, temporal_value)
        if triplet.temporal_value == None:
            triplet.temporal_value = f"R{len(self.triplets)}"
        self.triplets.append(triplet)
        return triplet, triplet.temporal_value

    def optimize_code(self):
        available = []

        for index, triplet in enumerate(self.triplets):
            temporal_value = triplet.temporal_value # R1, R2, ..., Rn
            occurrences = [occurrence for occurrence in self.triplets[index:] if 
                (temporal_value in [occurrence.first_operand, occurrence.second_operand, occurrence.label ] and temporal_value != 'main')
            ]
            if len(occurrences) == 0:
                available.append(temporal_value)
            if len(available) > 1:
                # Replace the current temporal_value with a recicled content
                recicled_value  = available.pop(0)
                for element in self.triplets[index:]:
                    if element.first_operand == temporal_value:
                        element.first_operand = recicled_value
                    if element.second_operand == temporal_value:
                        element.second_operand = recicled_value
                    if element.temporal_value == temporal_value:
                        element.temporal_value = recicled_value

        return self.triplets, available

    def generate_code(self, output_path = './instance/three_way_code/'):
        name = f"{output_path}code{random.randint(1,1000)}.txt"
        new_file = open(name, "w")
        string = ''
        for triplet in self.triplets:
            string += f'{str(triplet)}\n'
        new_file.write(string) # TODO: write content here from self.triplets
        new_file.close()

    def get_by_label(self, label: str):
        return next(triplet for triplet in self.triplets if triplet['label']== label)

if __name__ == '__main__':
    a = Triplet('+', 'a', 'b')
    print(a)
    twc = ThreeWayCode()
    twc.add(a)
    twc.generate_code()