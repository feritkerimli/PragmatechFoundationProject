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

# Siyahiya tek elementin elave edilmesi
a=["JavaScript","Python"]
print("Listin ilkin hali:",a)
a.append("C++")
print("Update olunmus list",a)

Neticemiz bele olacaq :
>>> Listin ilkin hali: ['JavaScript', 'Python']
    Update olunmus list ['JavaScript', 'Python', 'C++']
>>>

# Append methodu ile siyahiya listin elave edilmesi
a=["JavaScript","Python"]
b="C++"
print("Listin ilkin hali:",a)
a.append(b)
print("Update olunmus list",a)

Neticemiz bele olacaq :
>>> Listin ilkin hali: ['JavaScript', 'Python']
    Update olunmus list ['JavaScript', 'Python', 'C++']
>>>

# Siyahiya birden cox elementin elave edilmesi
a=["JavaScript","Python"]
b=["C++","Java"]
print("Listin ilkin hali:",a)
for i in b:
    a.append(i)
print("Update olunmus list",a)

Neticemiz bele olacaq :
>>> Listin ilkin hali: ['JavaScript', 'Python']
    Update olunmus list ['JavaScript', 'Python', 'C++', 'Java']
>>> 


# Append methodu ile siyahiya birden cox elementin elave edilmesi
a=["JavaScript","Python"]
print("Listin ilkin hali:",a)
b=["C++","Java"]
a.append(b)
print("Update olunmus list",a)

Neticemiz bele olacaq :
>>> Listin ilkin hali: ['JavaScript', 'Python']
    Update olunmus list ['JavaScript', 'Python', ['C++', 'Java']]
>>> 

# 2. clear() method
- clear() methodu siyahinin butun elementlerini silir(siyahini bos siyahiya cevirir)
- clear() methodu parametr qebul etmir.
- Gelin misallar uzerinden aydinlasdiraq...

# clear() methodu ile listin elementlerinin silinmesi
a=['Python','Java','C++']
print("Listin ilkin hali",a)
a.clear()
print("Clear olunmus list",a)

Neticemiz bele olacaq:

>>> Listin ilkin hali ['Python', 'Java', 'C++']
    Clear olunmus list []
>>> 

# 3. copy() methodu
- copy() methodu siyahinin kopyalayaraq bir deyisene teyin etmek ucun istifade olunur.
- Parametr qebul etmir
- Gelin misallar uzerinden aydinlasdiraq...

# copy() methodu ile listin koplayanmasi

a=['Python','Java','C++']
print("a Listi",a)
b = a.copy()
print("b Listi(copy() methodu ile yaradilmis)",b)

Neticemiz bele olacaq:

>>> a Listi ['Python', 'Java', 'C++']
    b Listi(copy() methodu ile yaradilmis) ['Python', 'Java', 'C++']
>>>

## Built in methods for Strings
# 1. count() methodu
- count() methodu verilmis elementlden Stringde nece dene oldugunu tapir
- Maximum 3 parametr qebul edir: count(element,start_index,end_index) 
    - element string icinde axtaracagimiz elementdir 
    - start_index elementi axtarmaga baslayacagimiz indexdir
    - end_index elementi axtarmagi sonlandiracagimiz indexdir
- Gelin misallarla aydinlasdiraq...


# count() methodu yalniz element parametri ile

a= 'String ucun xususi String methodlari vardir'
print("Axtaris edeceyimiz String:",a)
print("Axtardigimiz elementin Stringdeki sayi:",a.count("String"))

Neticemiz bele olacaq:
>>> Axtaris edeceyimiz String: String ucun xususi String methodlari vardir
    Axtardigimiz elementin Stringdeki sayi: 2
>>>

# count() methodu 2 parametr: element ve start_index parametri ile

a= 'String ucun xususi String methodlari vardir'
print("Axtaris edeceyimiz String:",a)
print("Axtardigimiz elementin Stringdeki sayi:",a.count("String",6))

Neticemiz bele olacaq:
>>> Axtaris edeceyimiz String: String ucun xususi String methodlari vardir
    Axtardigimiz elementin Stringdeki sayi: 1
>>>

# count() methodu 3 paramet ile
a= 'String ucun xususi String methodlari vardir'
print("Axtaris edeceyimiz String:",a)
print("Axtardigimiz elementin Stringdeki sayi:",a.count("String",6,18))

Neticemiz bele olacaq:
>>> Axtaris edeceyimiz String: String ucun xususi String methodlari vardir
    Axtardigimiz elementin Stringdeki sayi: 0
>>>

# 2. strip() methodu
- strip(character) methodu verilmis elementleri stringin basligindan ve sonundan silir.
- Bir parametr alir(Silinecek elementler)
    -default olaraq qaldiqda stringin basligindaki ve sonundaki bosluqlari silir.
- Gelin misallarla aydinlasiraq...

# strip() methodu(parametrsiz)
a='   Python    '
print("Ilkin hal:",a)
print("Bosluqsuz hal:",a.strip())

Neticemiz bele olacaq:
>>>Ilkin hal:    Python
   Bosluqsuz hal: Python
>>>

# strip(character) methodu character parametri ile
a='...,,,fPython,,,..'
print("Ilkin hal:",a)
print("Verilmis characterler silinmis hal:",a.strip('.,f'))

Neticemiz bele olacaq:
>>>Ilkin hal: ...,,,fPython,,,..
   Verilmis characterler silinmis hal: Python
>>>

# abs functionunun ekvivalenti strip() ile
a=input()
print("Eded",a)
print("Ededin modulu",a.strip("-"))

>>> -5 (daxil etsek)
Neticemiz bele olar:
>>>Eded -5
   Ededin modulu 5
>>>

# 3. capitalize() methodu
- Stringin Ilk herfini boyuk elemek ucun istifade olunur
- Parametr qebul etmir
- Gelin misallarla aydinlasdiraq...

# capitalize() methodu
a='python'
print("Ilkin hal:",a)
print("Ilk herfi boyuk hal:",a.capitalize())

Neticemiz bele olacaq:
>>>Ilkin hal: python
   Ilk herfi boyuk hal: Python
>>>

## Constructor
# __init__
- __init__ methodu class yaradarken objecte baslangic deyerlerin verilmesi ve ilkin emeliyyatlar ucun nezerde tutulur
- method ise hansisa bir emri yerine yetirir.
- self parametri olmadan islemir
- Classin icinde yalniz bir constructor ola biler(eyni seviyyede)
    - Varislik sistemi ile ic ice constructorlardan istifade olunur
- Gelin misallarla aydinlasdiraq...

# sade class
class kvadrat:
    def __init__(self,_teref,):
        self.Teref= _teref
    def sahe(self):
        return self.Teref ** 2
    def perimetr(self):
        return self.Teref * 4
kvadrat01=kvadrat(5)
print("Kvadratin terefi:",kvadrat01.Teref)
print("Kvatratin sahesi:",kvadrat01.sahe())
print("Kvadratin perimetri:",kvadrat01.perimetr())

Neticemiz bele olur:
>>>Kvadratin terefi: 5
   Kvatratin sahesi: 25
   Kvadratin perimetri: 20
>>>

# varislik sistemi
class people:
    def __init__(self,_ad,_soyad):
        self.Ad=_ad
        self.Soyad=_soyad
class Worker(people):
    def __init__(self,_ad,_soyad,_job):
        people.__init__(self,_ad,_soyad)
        self.Job=_job
    def showAll(self):
        print(f"{self.Ad} | {self.Soyad} | {self.Job}")
Isci01= Worker("Ferid","Kerimli","Student)")
print(Isci01.showAll())

Neticemiz bele olacaq:
>>> Ferid | Kerimli | Student)
>>>

# parametr moterize icinde olan deyisen: meselen, strip(character)
# argument ise verilen deyerdir : meselen strip(".//,")
- Gelin misallarla aydinlasdiraq

# parametri strip(character) olan method
a="///...Python,,.."
print(a)
# argumenti ise :
print(a.strip("/.,"))

## Functions
# Void functions                                       |   # Return functions
- Qiymet qaytarmir                                     |   - Qiymet qaytarir

# sade Void function
def void():
    print("salam")
void()

# sade return function
def returns(a,b,c):
    return a*b*c
print("Function qiymeti:",returns(2,3,4))
