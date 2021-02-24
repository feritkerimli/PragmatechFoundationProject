myList=[1,34,56,100,-12,87,987,1,3,5,56,67]
def beraber(lst):
    s=""
    for  i in range(len(lst)):
        for j in range(i+1,len(lst)):
            if lst[i]==lst[j]:
                s+=str(lst[j])+" "
    print("Equal elements:",s)

beraber(myList)