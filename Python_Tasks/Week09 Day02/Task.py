# https://www.w3resource.com/python-exercises/python-functions-exercises.php

# Question01
myList01=[1,2,3]
def Max(lst):
  return max(lst)
print(Max(myList01))

# Question02
myList02=[8, 2, 3, 0, 7]
def Sum(lst):
  return sum(lst)

print(Sum(myList02))

# Question03
myList03=[8, 2, 3, -1, 7]
def Multiply(lst):
  h=1
  for i in lst:
    h*=i
  return h

print(Multiply(myList03))
    
# Question04
myStr04="1234abcd"
def Reverse(Str):
    lst=list(Str)
    lst.reverse()
    s=""
    for i in lst:
        s+=i
    return s

print(Reverse(myStr04))

# Question05
import math
def Factiorial(num):
    return math.factorial(num)

print(Factiorial(5))

# Question06
def checkRange(startRange,endRange,num):
    if num > startRange and num < endRange:
        return("YES")
    else:
        return("NO")
print(checkRange(1,5,3))

# Question07
def Cases(Str):
    upper=['A','B','C','D','E','F','G','H','X','I','J','K','Q','L','M','N','O','P','R','S','T','U','V','Y','Z']
    lower=['a','b','c','d','e','f','g','h','x','i','j','k','q','l','m','n','o','p','r','s','t','u','v','y','z']
    upperCost=0
    lowerCost=0
    for i in Str:
        if i in upper:
            upperCost+=1
        elif i in lower:
            lowerCost+=1
    print("Upper cost:",upperCost,"Lower cost:",lowerCost)
Cases('The quick Brow Fox')

# Question08
myList08=[1,2,3,3,3,4,4,5]
def Equal(lst):
    s=[]
    for i in lst:
        if i not in s:
            s.append(i)
    return s
print(Equal(myList08))

# Question09
def Prime(num):
    i=2
    s=0
    while i**2 <num:
        if num % i==0:
            s+=1
        i+=1
    if s > 0:
        return "No"
    else:
        return "Yes"
print(Prime(5))

# Question10
myList10=[1, 2, 3, 4, 5, 6, 7, 8, 9]
s=[]
def evenNum(lst):
    for i in lst:
        if i % 2 ==0:
            s.append(i)
    return s
print(evenNum(myList10))

# Question11
def Perfect(num):
    b=[1]
    for i in range(2,(num//2)+1):
        if num % i == 0:
            b.append(i)
    if sum(b)== num:
        return "Yes"
    else:
        return "No"
print(Perfect(496))

# Question12
def Palindrom(Str):
    d= list(Str)
    d.reverse()
    s=""
    for i in d:
        s+=i
    if Str==s:
        return "Yes"
    else:
        return "No"
print(Palindrom("enene"))

# Question13
def PascalTriangle(n):
    if n == 0:
        return("1")
    l=[]
    g=""
    for i in range(n):
        i=i
        l.append(["1"])
    for i in range(n):
        i=i
        l[i].append("1")
    for j in range(1,n):
        l[j].remove("1")
        for i in range(len(l[j-1])):
            if i+1 < len(l[j-1]):
                s= int(l[j-1][i])+ int(l[j-1][i+1])
                l[j].append(str(s))
        l[j].append("1")
    print("1")
    for i in l:
        g=""
        for j in i:
            g+=j+" "
        
        print(g)
PascalTriangle(5)

# Question14
def Pangram(Str):
    case=['a','b','c','d','e','f','g','h','x','i','j','k','q','l','m','n','o','p','r','s','t','u','v','y','z','w']
    s= Str.lower()
    y=""
    c=0
    for i in s:
        if i not in y :
            y+=i
    for i in y :
        if i in case:
            c+=1
    if c >=26:
        return "Yes"
    else:
        return "No"

print(Pangram("The quick brown fox jumps over the lazy dog"))

# Question15
def Sorting(Str):
    s=Str.split("-")
    s.sort()
    c="" 
    for i in s:
        if i != s[len(s)-1]:
            c+=i+"-"
        else:
            c+=i
    return c
print(Sorting("green-red-yellow-black-white"))

# Question16
def ListGenerator(start,end):
    lst=[]
    for i in range(start,end+1):
        lst.append(i**2)
    return lst
print(ListGenerator(1,30))

# Question17


