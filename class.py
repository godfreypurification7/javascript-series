class Car:
    def __init__(self):

        #Initialize the Car with default attributes
        self.make = "Toyota"
        self.model = "Corolla"
        self.year = 2020
    def display(self):
        print(f"{self.make},{self.model},{self.year}")

# Creating an instance using the default constructor
car = Car()
car.display()
# print(car.make)
# print(car.model)
# print(car.year)