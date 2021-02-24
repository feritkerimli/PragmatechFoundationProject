## Python interpreted bir dildir. İnterpreted dilin iş prinsipini izah edin
- Interpreter dil kodu setir setir oxuyur.
- Kod sehv olan yere qeder isleyir ve sehvin ne oldugunu deyir, sehvi tapmaq asan olur
## Interpreted və compiler dillər arasında olan fərqləri izah edin
- Interpreter dil kodu setir setir oxuyur.     Compiler dil kodu butovlukle oxuyub analiz edir
- Kod sehv olan yere qeder isleyir             Kodda sehv varsa umumiyyetle islemir
- Kodu analiz edib icra edir                   Kodu analiz edir masin koduna cevirib sonra icra edir
## Python data tipləri hansılardır? Hər biri haqqında qısa izahat verin
# str(String)
- str(String) data typesi valueleri setir olaraq yadda saxlayir "Ferid" kimi
- Her hansi valueni stringe cevirmek ucun str(x) den istifade olunur burda x her hansi value ve ya deyisen ola biler
- meselen : "5" + str(4) => "54" edir 
# int(Integer)
- int(Integer) data typesi valueleri tam eded olaraq yadda saxlayir 5 kimi
- Valueni integer etmek ucun int(x) den istifade olunur burda x value ve ya deyisen ola biler 
- meselen : int("5") + int(5.4) => 10 edir 
- Her valueni integer elemek olmaz
- meselen : int("Ferid") => xeta verecek
# float
- float data typesi valueleri ondaliq kesr kimi yadda saxlayir 5.4 kimi
- Valueni float elemek ucun float(x) istifade olunur burda x value ve ya deyisen ola biler
- meselen : float(5) => 5.0 ve ya float("5") => 5.0 olur
- Her valueni float elemek olmur
- meselen : float("Ferid") => xeta verecek
# complex
- complex data typesi valueleri heqiqi ve onun qosmasi kimi xeyali ededle bir yerde yadda saxlayir (5+4j) kimi
- Valueni complex elemek ucun complex(x) istifade olunur burda x value ve ya deyisen ola biler
- meselen : complex(4+5j) => (4+5j) complex(0) => (0j) complex(3) => (3+0j)
- Her value complex ola bilmez
- meselen : complex("Ferid") => xeta verecek
- complex ededler uzerindede riyazi emeller etmek mumkundur
# list
- list data typesi valueleri bir massive yigir ["ferid",5.4,5] kimi
- Valueni list etmek ucun list(x) istifade olunur ve ya str den list almaq ucun x.split(character) istifade olunur
- meselen : list("Ferid") => ["f","e","r","i","d"]  "Ferid Kerimli".split(" ") => ["Ferid","Kerimli"] olur
- split() bos buraxilsa " " olaraq goturur characteri
- listler nizamlidir yeni d= [1,"ferid"]  d[0] => 1 d[1] => "ferid"
# tuple
- tuple data typesi valueleri bir korteje yigir ("ferid",5,5.4) kimi
- Valuneni tuple elemek ucun tuple(x) istifade olunur
- meselen : tuple("Eli") => ("E","l","i") tuple("Ferid Kerimli".split()) => ("Ferid","Kerimli") olur
- bir elementli tuple yaratmaq ucun (x,) istifade olunur
# range
- range data typesi valueleri bir araliq kimi yadda saxlayir. range(0,5) kimi
- Valueni range elemek ucun range(x) istifade olunur
- Yalniz integer valueleri qebul edir
- meselen : range(5) => range(0,5) olur
# dict(Dictionary)
- dict data typesi assosiativ massivlerdir. {"eli":5,"tunar":4} kimi
- dictionary yaratmanin yollari:
    1. d = {"eli":5,"tunar": "dord"} kimi
    2. d = dict(eli = 5, tunar = "dord") => {"eli":5, "tunar": "dord"} ve ya d= dict([(1,1),(2,2)]) => {1:1, 2:2} olur
    3. d = dict.fromkeys(["a","b"],100) => {"a":100 , "b", 100}
    4. d ={a: a**2 for a in range(4)} => {0:0, 1:1, 2:4, 3:9}
- dictler listleriden ferqli olaraq nizamli deyildir  ona gore de key value den istifade olunur
# coxluqlar
- coxluqlar iki yere ayrilir set ve frozenset
    - set ve frozenset data typesi valueleri nizamsiz tekrarlanmayan coxluq kimi yadda saxlayir {'f',1} kimi
    - Valueni set elemek ucun set(x) istifade olunur frozenset elemek ucun ise frozenset(x)
    - set typesi deyisdirile bilir frozenset ise deyisdirile ve uzerinde emeliyyatlar aparila bilmir
# bool
- bool data typesi valueni boolean kimi yadda saxlayir True ve ya False
# bytes
- bytes data typesi valueni baytlar ardicilligi seklinde yadda saxlayir b'setir'
- Yaranma yollari:
    1. bytes(setir,kodlama,xeta) kodlama ascii ve ya utf-8 xetalar ise default olaraq strict goturulur
    2. setir.encode(kodlama,xeta)
    3. bytes[ardicilliq]
    4. bytes(eded)
    5. bytes.fromhex(setir) ve s.
# bytearray
- bytearray data typesi bytes obyektlerini bir massive yigmaq ucun istfade olunur bytearray(b'setir')
- Yaranma yollari:
    1. bytearray(ardicilliq)
    2. bytearray(eded)
    3. bytearray.fromhex(setir) ve s.
# memoryview
- memoryview data typesi obyektin bayt yonumlu melumatlarini birbasa oxuyub deyisme imkani verir  

## Object Oriented Programming nədir? Niyə belə bir paradigmanın var olduğunu izah edin
- Obyekt yonumlu programlama verilen paradigma ve funksiyalari bir objecte yigmaga ve xarici mudaxilelerden qorunmasina yariyir
- Iki esas aspekti var class ve object : class obbject yaradir object ise onun numayendesi olur.
- Objecte aid funksiyalar ise method adlanir
## Proqram yazarkən metodlardan istifadə edirik. Hansı hallarda metod istifadə edilməlidir?
- Programi ozumuz yazarken cox uzun olsa yada alinmasa isimiz method ile daha asan olacaqsa metoddan istifade edilmeli
## local və global variable nədir izah edin
- local deyisen yalniz verildiyi seviyyede isleyir 
- global deyisen butun kodda isleyir
- meselen funksiyanin icinde deyisen teyin etsek sadece o funksiya icinde isleyecek
- deyiseni global etmek ucun  global x ; x= 5 istifade olunur
## Python type conversion haqqında izahat verin
- Iki yere ayrilir: Auto conversion ve manual conversion: type(ifade)
- Auto conversion: x=5 ; y= 4.6 ; x+y => 9.6 olur x => int y => float x+y => float olur
- Manual conversion: x=5 ; y= 4.6 ; int(x+y) => 9 olur 
## init nədir?
- init konstruktordur
- objecte baslangic qiymetlerin verilmesi ve ilkin emeliyyatlarin aparilmasi ucun istifade olunur
## self nədir?
- self gosterilen deyisenin hansi objecte aid oldugunu teyin edir yeni deyiseni objectle baglayir.
## *args,*kwargs nədir? nə zaman istifadə olunur?
- Funksiyaya melum olmayan sayda acar sozsuz(deyisensiz) argument oturulecekse * lu argumentlerden *args
- melum olmayan sayda acar sozlu(deyisenli) argument oturulecekse ** lu argumentlerden istifade olunacaq **kwargs
## Python module nədir?
- Modul hansisa fayla qosulan fayldir
- Modul boyuk applari hisselere ayirib asan idare elemeye ve hemin koddan tekrar tekrar istifade etmek ucun elverislidir
## Python package nədir?
- Package modlullar toplusudur
## pass nədir? Nə zaman istifadə olunur?
- Her hansi app in demosunu hazirlayanda yada hansisa functionu sonra yazmaq lazim geldikde hemin yeri bos buraxmaq xeta sebebi olur. Bunun qarsisini almaq ucun pass dan istifade olunur
## List metodlarından 5 ədəd metodun izahatını yazın
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
# 4. reverse() methodu
- reverse() methodu listi tersine cevirir yeni elementleri tesrden duzur
- parametri yoxdur
- Gelin misallar uzerinden aydinlasdiraq...

# misal
a=['Python','Java','C++']
print("Listin ilkin hali:",a)
a.reverse()
print("reverse() methodundan sonra:",a)
Neticemiz bele olacaq:
>>> Listin ilkin hali: ['Python', 'Java', 'C++']
    reverse() methodundan sonra: ['C++', 'Java', 'Python']
>>>
# 5. remove() methodu
- reverse(elem) methodu listden elem-in silinmesini temin edir
- parametri olan elem silinecek elementdir
- Gelin misallarla aydinlasdiraq...
# misal
a=['Python','Java','C++']
print("Listin ilkin hali:",a)
a.remove("Java")
print("remove() methodundan sonra:",a)
Neticemiz bele olacaq:
>>> Listin ilkin hali ['Python', 'Java', 'C++']
    remove() methodundan sonra ['Python', 'C++']
>>>

## List və dict hansı hallarda istifadə olunur?
- List de dict de data toplusudur lakin dict de elementler key value sistemi ile listde ise index value ile baglidirlar. Yeni listde elementler nizamli dictde nizamsizdir keyler vasitesile teyin olunurlar
## Dict metodlarından 5 ədəd metodun izahatını yazın
# 1. clear() method
- clear() methodu dictin butun elementlerini silir dicti bos dict edir
- parametr qebul etmir
- Gelin misallarla aydinlasdiraq...
# misal
a= {1:1 ,2:4 ,3:9 }
print("Ilkin hal:",a)
a.clear()
print("son hal:",a)
Neticemiz bele olacaq:
>>> Ilkin hal: {1: 1, 2: 4, 3: 9}
    son hal: {}
# 2. copy() methodu
- copy() methodu dictionu copy ederek basqa bir deyisene menimsetmek ucun istifade olunur
- parametr qebul etmir
- Gelin misallarla aydinlasdiraq...
# misal
a= {1: 1, 2: 4, 3: 9}
print("a dicti:",a)
b = a.copy()
print("b dicti:",b)
Neticemiz bele olacaq:
>>> a dicti: {1: 1, 2: 4, 3: 9}
    b dicti: {1: 1, 2: 4, 3: 9}
>>>
# 3. fromkeys() methodu
- fromkeys(keys,value) methodu dict yaratmaq ucun istifade olunur lakin butun keylerin valuesi eyni olur
- parametr olaraq keys ve bir dene value qebul edir
- Gelin misallarla aydinlasdiraq...
# fromkeys() variant01
a= dict.fromkeys(['a','b'],100)
print(a)
Neticemiz bele olacaq:
>>> {'a':100 , 'b':100}
>>>
# fromkeys() deyisen ile variant02
x= ('a','b')
y=100
a= dict.fromkeys(x,y)
print(a)
Neticemiz bele olacaq:
>>> {'a':100, 'b':100}
>>>
# 4. keys() methodu
- keys() methodu dictdeki keyleri gostermek ucun istifade olunur
- parametr qebul etmir
- Gelin misallarla aydinlasdiraq...
# misal
a = {1: 1, 2: 4, 3: 9}
print(a.keys())
Neticemiz bele olacaq:
>>> dict_keys([1, 2, 3])
>>>
# 5. popitem() methodu
- popitem() methodu dictden sonuncu elementi silmek ucun istifade olunur
- parametr qebul etmir
- Gelin misallarla aydinlasdiraq...
# misal
a = {1: 1, 2: 4, 3: 9}
print("dict:",a)
a.popitem()
print("dictin son hali:",a)
Neticemiz bele olacaq:
>>> dict: {1: 1, 2: 4, 3: 9}
    dictin son hali: {1: 1, 2: 4}
>>>