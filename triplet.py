import random

class Triplet:
    def __init__(self, operator, first_operand, second_operand, label=None, temporal_value=None):
        self.operator = operator
        self.first_operand = first_operand
        self.second_operand = second_operand
        self.label = label
        self.temporal_value = temporal_value

    def __str__(self):
        return f"{self.first_operand} {self.operator} {self.second_operand} ({self.temporal_value}) # {self.label}"

class ThreeWayCode:
    def __init__(self):
        self.triplets: list[Triplet] = []

    def add(self, triplet: Triplet):
        self.triplets.append(triplet)

    def generate_code(self, output_path = './instance/three_way_code/'):
        name = f"{output_path}code{random.randint(1,1000)}.txt"
        new_file = open(name, "w")
        string = ''
        for triplet in self.triplets:
            string += f'{str(triplet)}\n'
        new_file.write(string) # TODO: write content here from self.triplets
        new_file.close()


a = Triplet('+', 'a', 'b')
print(a)
twc = ThreeWayCode()
twc.add(a)
twc.generate_code()