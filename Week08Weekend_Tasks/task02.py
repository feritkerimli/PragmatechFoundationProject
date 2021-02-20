myList=[1,34,56,100,-12,87,987,1,3,5,56,67]
def elem(lst):
    s=""
    for i in lst:
        s+=str(i)+" "
    print("Elements:",s)
elem(myList)