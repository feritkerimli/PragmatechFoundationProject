""" 
# Built in methodlar her hansi bir type object ucun onceden hazirlnmis hazir funksiyalardir.
# Her hansi bir built in methoddan istifade etmeden once bezi seyleri arasdirmaq lazimdir
    - 1. method hansi type objectler ucun nezerde tutulub
    - 2. method ne ise yariyir(ne ucun istifade olunur)
    - 3. method nece parametr qebul edir ve bu parametrler ne ise yariyir
## Built in methods for List
# 1. append(elem)
- append siyahiya element ve ya element toplusu elave etmek ucun istfade olunur.
- 1 parametr qebul edir(siyahiya elave olunacaq element ve ya element toplusu).
- Yuxarida da gorunduyu kimi append() siyahiya bir elementle yanasi elementler toplusuda elave ede biler.
- Gelin misallar uzerinden aydinlasdiraq...
"""
# Siyahiya tek elementin elave edilmesi
a=["JavaScript","Python"]
print("Listin ilkin hali:",a)
a.append("C++")
print("Update olunmus list",a)
"""
Neticemiz bele olacaq :
>>> Listin ilkin hali: ['JavaScript', 'Python']
    Update olunmus list ['JavaScript', 'Python', 'C++']
>>>
"""
# Append methodu ile siyahiya listin elave edilmesi
a=["JavaScript","Python"]
b="C++"
print("Listin ilkin hali:",a)
a.append(b)
print("Update olunmus list",a)
"""
Neticemiz bele olacaq :
>>> Listin ilkin hali: ['JavaScript', 'Python']
    Update olunmus list ['JavaScript', 'Python', 'C++']
>>>
"""
# Siyahiya birden cox elementin elave edilmesi
a=["JavaScript","Python"]
b=["C++","Java"]
print("Listin ilkin hali:",a)
for i in b:
    a.append(i)
print("Update olunmus list",a)
"""
Neticemiz bele olacaq :
>>> Listin ilkin hali: ['JavaScript', 'Python']
    Update olunmus list ['JavaScript', 'Python', 'C++', 'Java']
>>> 
"""

# Append methodu ile siyahiya birden cox elementin elave edilmesi
a=["JavaScript","Python"]
print("Listin ilkin hali:",a)
b=["C++","Java"]
a.append(b)
print("Update olunmus list",a)
"""
Neticemiz bele olacaq :
>>> Listin ilkin hali: ['JavaScript', 'Python']
    Update olunmus list ['JavaScript', 'Python', ['C++', 'Java']]
>>> 
"""

"""
# 2. clear() method
- clear() methodu siyahinin butun elementlerini silir(siyahini bos siyahiya cevirir)
- clear() methodu parametr qebul etmir.
- Gelin misallar uzerinden aydinlasdiraq...
"""
# clear() methodu ile listin elementlerinin silinmesi
a=['Python','Java','C++']
print("Listin ilkin hali",a)
a.clear()
print("Clear olunmus list",a)
"""
Neticemiz bele olacaq:

>>> Listin ilkin hali ['Python', 'Java', 'C++']
    Clear olunmus list []
>>> 
"""

"""
# 3. copy() methodu
- copy() methodu siyahinin kopyalayaraq bir deyisene teyin etmek ucun istifade olunur.
- Parametr qebul etmir
- Gelin misallar uzerinden aydinlasdiraq...
"""
# copy() methodu ile listin koplayanmasi

a=['Python','Java','C++']
print("a Listi",a)
b = a.copy()
print("b Listi(copy() methodu ile yaradilmis)",b)
"""
Neticemiz bele olacaq:

>>> a Listi ['Python', 'Java', 'C++']
    b Listi(copy() methodu ile yaradilmis) ['Python', 'Java', 'C++']
>>>
"""
