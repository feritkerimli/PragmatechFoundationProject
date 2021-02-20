myList=[1,34,56,100,-12,87,987,1,3,5,56,67]
def doubleElements(lst):
    s=""
    for i in range(len(lst)):
        if i%2==0:
            s+=str(lst[i])+" "
    print("Double index elements:",s)
doubleElements(myList)
            