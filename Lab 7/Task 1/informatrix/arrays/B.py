n=int(input())
a=[0]*n
for i in range(0,n):
    a[i]=int(input())
for i in range(0,n):
    if a[i]%2==0:
        print(a[i], end=' ')