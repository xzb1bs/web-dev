n=int(input())
a=[0]*n
count=0
for i in range(0,n):
    a[i]=int(input())
for i in range(0,n):
    if a[i-1] < a[i]:
        count+=1
print(count)