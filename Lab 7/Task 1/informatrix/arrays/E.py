n=int(input())
a=[0]*n
bool = False
for i in range(0,n):
    a[i]=int(input())
for i in range(0,n):
    if a[i-1] * a[i] > 0:
        print("YES")
else:
    print("NO")        