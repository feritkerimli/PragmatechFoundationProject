# https://www.hackerrank.com/challenges/write-a-function/problem
def is_leap(year):
    leap = False
    l=[]
    for i in range(0,10**5,4):
        l.append(i)
    
    # Write your logic here
    if year>1900 and year<10**5:
        if year==2100:
            leap=False 
        elif year in l:
            leap = True
    return leap