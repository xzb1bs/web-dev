from random import randint
from random import random
import random
def xor (x,y):
    if x == 1 and y == 0:
        return 1
    elif x == 0 and y == 1:
        return 1
    elif x == 1 and y ==1:
        return 0
    elif x == 0 and y == 0:
        return 0
    
x = random.randint(0,1)
y = random.randint(0,1)
print(xor(x,y))