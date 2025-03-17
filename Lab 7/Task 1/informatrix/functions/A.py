def small (a, b, c, d):
    if a < b and a < c and a < d:
        return a
    elif b < a and b < c and b < d:
        return b
    elif c < a and c < b and c < d:
        return c
    else:
        return d
    
a = int(input())
b = int(input())
c = int(input())
d = int(input())

print(small(a,b,c,d))