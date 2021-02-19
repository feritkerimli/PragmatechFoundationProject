# 1 ci sual
"""
def halfsum():
    a= int(input(":"))
    b= int(input(":"))
    return (a+b)/2
halfsum()
"""
# 2 ci sual
"""
name= input("name:")
pasword= input("pasword:")
if name == "admin" and pasword == "123456":
    print("Duzdur")
else:
    print("Sehvdir")
"""
# 3 cu sual
"""
dostlar=["Ehmed","Memmed","Sabir","Efsane","Qurban"]
say=0
index=""
for i in range(len(dostlar)):
    for j in range(len(dostlar[i])):
        if dostlar[i][j]=="a":
            say+=1
            index+=str(i)+ " "
            break
print("Element sayi:",say)
print("Element indexleri:",index)
"""
# 4 cu sual
"""
meqale="Baş nazir bildirib ki, müxtəlif sahələrdə əməkdaşlığımızı nəzərdə tutan bir çox sənədlər dünən keçirilən görüşlərdə imzalanıb: “Bu, çoxtərəfli platforma gələcək üçün böyük perspektivlər vəd edir. Əminəm ki, bu gün keçirilən iclasın nəticələri ikitərəfli münasibətlərin inkişafına da təkan verəcək. Prezident İlham Əliyev və Rəcəb Tayyib Ərdoğanın yorulmaz səyləri nəticəsində ölkələrimiz arasında münasibətlər ən yüksək səviyyəyə çatıb. Əməkdaşlığımız bütün sahələri əhatə edir. 2023-cü ilədək ticarət dövriyyəmizi 15 milyard dollara çatdırmaq əsas hədəflərimizdəndir”."
words=1
for i in meqale:
    if i==" ":
        words+=1
print(words)
"""
# 5 ci sual (ad,qiymet,yazar)
id=1
book_list=[]
class Books:
    def __init__(self,_id,_ad,_price,_yazar):
        self.Id=_id
        self.Ad=_ad
        self.Price=_price
        self.Yazar=_yazar
    def showAll(self):
        print(f"{self.Id} | {self.Ad} | {self.Price} | {self.Yazar}")
# 5 
def showMenu():
    print("""
    1. Kitab elave et
    2. Kitablari gor
    3. Kitab sil
    4. menuya qayit
    5. cixis et
    """)
# 1
def add():
    global id
    ad=input("ad:")
    price=input("qiymet:")
    yazar=input("yazar:")
    book= Books(id,ad,price,yazar)
    book_list.append(book)
    id+=1
#2
def see():
    for item in book_list:
        print(item.showAll())
#3
def delete():
    index=int(input(":"))
    for item in book_list:
        if index==item.Id:
            book_list.remove(item)
            for i in range(len(book_list)):
                item[i].Id=i+1
while True:
    a=input("emr daxil et:")
    if a=="1":
        add()
    elif a=="2":
        see()
    elif a=="3":
        delete()
    elif a=="4":
        showMenu()
    elif a=="5":
        break