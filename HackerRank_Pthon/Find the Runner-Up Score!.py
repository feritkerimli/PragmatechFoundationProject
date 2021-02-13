# https://www.hackerrank.com/challenges/find-second-maximum-number-in-a-list/problem
n = int(input())
arr = map(int, input().split())
a= list(arr)
a.sort()
a.reverse()
s=0
for i in range(len(a)-1):
    if a[i] != a[i+1]:
        s+=a[i+1]
        break
print(s)