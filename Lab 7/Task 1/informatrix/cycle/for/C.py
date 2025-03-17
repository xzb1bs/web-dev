from math import sqrt
a=int(input())
b=int(input())
for i in range(a,b):
    if sqrt(i) % 1 == 0:
        print(i, end=' ')
