myList=[1,34,56,100,-12,87,987,1,3,5,56,67]
def sorting(lst):
    l=[]
    for i in range(len(lst)):
        i=i
        s= min(lst)
        l.append(s)
        lst.remove(s)
    print("Azalan sira:",l)
sorting(myList)