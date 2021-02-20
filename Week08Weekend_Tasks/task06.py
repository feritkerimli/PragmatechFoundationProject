myList=[1,34,56,100,-12,87,987,1,3,5,56,67]
def singleElements(lst):
    s=[]
    for i in range(len(lst)):
        if i%2==0:
            s.append(lst[i])
    for j in s:
        lst.remove(j)
    print("Single index elements:",lst)
singleElements(myList)
            