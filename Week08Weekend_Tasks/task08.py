myList=[1,34,56,100,-12,87,987,1,3,5,56,67]
def sum_elem(lst):
    s=0
    for i in lst:
        s+=i
    print("Element`s sum:",s)
sum_elem(myList)