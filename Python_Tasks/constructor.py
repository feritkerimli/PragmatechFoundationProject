"""
## Constructor
# __init__
- __init__ methodu class yaradarken objecte baslangic deyerlerin verilmesi ve ilkin emeliyyatlar ucun nezerde tutulur
- method ise hansisa bir emri yerine yetirir.
- self parametri olmadan islemir
- Classin icinde yalniz bir constructor ola biler(eyni seviyyede)
    - Varislik sistemi ile ic ice constructorlardan istifade olunur
- Gelin misallarla aydinlasdiraq...

"""
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
"""
Neticemiz bele olur:
>>>Kvadratin terefi: 5
   Kvatratin sahesi: 25
   Kvadratin perimetri: 20
>>>
"""



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
"""
Neticemiz bele olacaq:
>>> Ferid | Kerimli | Student)
>>>
"""

    
