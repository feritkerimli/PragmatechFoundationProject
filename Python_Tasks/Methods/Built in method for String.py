"""
## Built in methods for Strings
# 1. count() methodu
- count() methodu verilmis elementlden Stringde nece dene oldugunu tapir
- Maximum 3 parametr qebul edir: count(element,start_index,end_index) 
    - element string icinde axtaracagimiz elementdir 
    - start_index elementi axtarmaga baslayacagimiz indexdir
    - end_index elementi axtarmagi sonlandiracagimiz indexdir
- Gelin misallarla aydinlasdiraq...
"""

# count() methodu yalniz element parametri ile

a= 'String ucun xususi String methodlari vardir'
print("Axtaris edeceyimiz String:",a)
print("Axtardigimiz elementin Stringdeki sayi:",a.count("String"))
"""
Neticemiz bele olacaq:
>>> Axtaris edeceyimiz String: String ucun xususi String methodlari vardir
    Axtardigimiz elementin Stringdeki sayi: 2
>>>
"""

# count() methodu 2 parametr: element ve start_index parametri ile

a= 'String ucun xususi String methodlari vardir'
print("Axtaris edeceyimiz String:",a)
print("Axtardigimiz elementin Stringdeki sayi:",a.count("String",6))
"""
Neticemiz bele olacaq:
>>> Axtaris edeceyimiz String: String ucun xususi String methodlari vardir
    Axtardigimiz elementin Stringdeki sayi: 1
>>>
"""
# count() methodu 3 paramet ile
a= 'String ucun xususi String methodlari vardir'
print("Axtaris edeceyimiz String:",a)
print("Axtardigimiz elementin Stringdeki sayi:",a.count("String",6,18))

"""
Neticemiz bele olacaq:
>>> Axtaris edeceyimiz String: String ucun xususi String methodlari vardir
    Axtardigimiz elementin Stringdeki sayi: 0
>>>
"""

"""
# 2. strip() methodu
- strip(character) methodu verilmis elementleri stringin basligindan ve sonundan silir.
- Bir parametr alir(Silinecek elementler)
    -default olaraq qaldiqda stringin basligindaki ve sonundaki bosluqlari silir.
- Gelin misallarla aydinlasiraq...
"""
# strip() methodu(parametrsiz)
a='   Python    '
print("Ilkin hal:",a)
print("Bosluqsuz hal:",a.strip())
"""
Neticemiz bele olacaq:
>>>Ilkin hal:    Python
   Bosluqsuz hal: Python
>>>
"""
# strip(character) methodu character parametri ile
a='...,,,fPython,,,..'
print("Ilkin hal:",a)
print("Verilmis characterler silinmis hal:",a.strip('.,f'))
"""
Neticemiz bele olacaq:
>>>Ilkin hal: ...,,,fPython,,,..
   Verilmis characterler silinmis hal: Python
>>>
"""
# abs functionunun ekvivalenti strip() ile
a=input()
print("Eded",a)
print("Ededin modulu",a.strip("-"))
"""
>>> -5 (daxil etsek)
Neticemiz bele olar:
>>>Eded -5
   Ededin modulu 5
>>>
"""

"""
# 3. capitalize() methodu
- Stringin Ilk herfini boyuk elemek ucun istifade olunur
- Parametr qebul etmir
- Gelin misallarla aydinlasdiraq...
"""
# capitalize() methodu
a='python'
print("Ilkin hal:",a)
print("Ilk herfi boyuk hal:",a.capitalize())
"""
Neticemiz bele olacaq:
>>>Ilkin hal: python
   Ilk herfi boyuk hal: Python
>>>
"""
