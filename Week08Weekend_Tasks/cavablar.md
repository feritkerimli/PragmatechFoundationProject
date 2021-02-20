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

