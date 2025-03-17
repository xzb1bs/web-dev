def election (x,y,z):
    if x == 1 and y == 1 and z == 1:
        return 1
    elif x == 1 and y == 1 and z == 0:
        return 1
    elif x == 1 and y == 0 and z == 1:
        return 1
    elif x == 0 and y == 1 and z == 1:
        return 1
    elif x == 0 and y == 0 and z == 0:
        return 0
    elif x == 0 and y == 0 and z == 1:
        return 0
    elif x == 0 and y == 1 and z == 0:
        return 0
    elif x == 1 and y == 0 and z == 0:
        return 0
    else:
        return 0
    
x = int(input())
y = int(input())
z = int(input())

if x == 1 or x == 0 and y == 1 or y == 0 and z == 1 or z == 0:
    print(election(x,y,z))

else:
    print("Invalid input")