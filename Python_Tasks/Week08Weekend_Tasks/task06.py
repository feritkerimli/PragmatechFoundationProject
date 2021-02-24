myList=[1,34,56,100,-12,87,987,1,3,5,56,67]
def singleElements(lst):
    s=[]
    for i in range(0,len(lst),2):
        s.append(lst[i])
    lst=s
    print("Double index elements:",lst)
singleElements(myList)
            