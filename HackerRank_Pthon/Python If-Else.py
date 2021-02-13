# https://www.hackerrank.com/challenges/py-if-else/problem
n = int(input().strip())
if n>=1 and n<=100:
    if n ==1:
        print("Weird")
    elif n%2==1:
        print("Weird")
    elif n>=6 and n<=20:
        print("Weird")
    else:
        print("Not Weird")