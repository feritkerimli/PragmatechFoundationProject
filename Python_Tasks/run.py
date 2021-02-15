# Proqrama ad,soyad melumatlari daxil edilir
# Bu melumatlar vasitesi ile Person obyekti yaradilir
# Yaradilan bu obyekt persons adinda bir siyahiya elave edilir
# proqramin idare etme paneli hazirlanir

# Workflow
# 1. Menu hazirlanmasl
# - Yeni istifadeci elave et
# - Id-ye istifadeci melumati gor
# - Butun istifadecileri gor
# - Secilen istifadecini sil
# - Secilen istifadeci melumatlarini deyisdir

# users=[]
users=list()
id=1
class User():
    def __init__(self,_ad,_soyad,_id):
        self.Id=_id
        self.Ad=_ad
        self.Soyad=_soyad
    def showUserData(self):
        print(f"{self.Id} | {self.Ad} | {self.Soyad}")

commandList=[
    "1. Yeni istifadəçi əlavə et ",
    "2. Bütün istifadəçilər",
    "3. Seçilən istifadəçini sil",
    "4. Seçilən istifadəçinin məlumatlarını dəyişdir",
    "5. Əsas menunu göstər",
    "6. Butun istifadecileri sil",
    "7. Verilmis id-ye gore istifadecini gor",
    "0. Programi dayandir"
]
# Console-da 5 daxil edildikdə
def start():
    for item in commandList:
        print(item)

# Console-da 1 daxil edildikdə
def addNewUser():
    global id
    ad=input('Ad: ')
    soyad=input('Soyad: ')
    user=User(ad,soyad,id)
    users.append(user)
    id+=1

# Console-da 2 daxil edildikdə
def showAllUsers():
    for user in users:
        user.showUserData()
# Console-da 3 daxil edildikdə
def deleteUser():
    id=int(input('Silmek istediyiniz istifadecinin id-sini daxil edin : '))
    for user in users:
        if user.Id==id:
            users.remove(user)
            # id yenileme (me)
            for i in range(len(users)):
                users[i].Id=i+1
# Console-da 4 daxil edildikdə (me)

def updateUser():
    update_id=int(input('Update elemek istediyiniz istifadecinin id-sini daxil edin:'))
    print("""
    1. Ad
    --------
    2. Soyad
    --------
    3. Her ikisi
    """)
    update_command=int(input("Deyismek istediyiniz hissenin emr nomresini yazin:"))
    if update_command==1:
        name=input("Yeni adi daxil edin")
        for user in users:
            if user.Id==update_id:
                user.Ad=name
    elif update_command==2:
        surname=input("Yeni soyadi daxil edin:")
        for user in users:
            if user.Id==update_id:
                user.Soyad=surname
    elif update_command==3:
        name=input("Yeni adi daxil edin:")
        surname=input("Yeni soyadi daxil edin:")
        for user in users:
            if user.Id==update_id:
                user.Ad=name
                user.Soyad=surname
# Console-da 6 daxil edildikdə (me)
def deleteAll():
    users.clear()
    print("Butun istifadeciler silindi...")
# Console-da 7 daxil edildikdə (me)
def showById():
    show_id = int(input("Gormek istediyiniz istifadecinin id-sini daxil edin:"))
    for user in users:
        if show_id==user.Id:
            user.showUserData()

start()


while True:
    choise=input('Əmr nömrəsini daxil edin : ')
    print('________________________')
    if choise=='1':
        addNewUser()
    elif choise=='2':
        showAllUsers()
    elif choise=='3':
        deleteUser()
    elif choise=='4':
        updateUser()
    elif choise=='5':
        start()
    elif choise=='6':
        deleteAll()
    elif choise=='7':
        showById()
    elif choise=='0':
        break
    else:
        print("Zehmet olmasa size verilen emrlerden istifade edin")
        print("---------------------------------------------------")
        start()