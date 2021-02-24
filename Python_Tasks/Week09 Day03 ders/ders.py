isciler=[
    {
        'ad':'Memmed',
        'maas':'600AZN'
    },
    {
        'ad':'Cemile',
        'maas':'500AZN'
    },
    {
        'ad':'Saleh',
        'maas':'1200AZN'
    },
    {
        'ad':'Gulnar',
        'maas':'980AZN'
    }
]
# maas cemi
# 18 % vergi cixandan sonraki maaslari list kimi cap et
# maasi ortalamadan yuksek olan maaslar

# maaslar
def Maaslar(isciler,valyuta):
    maaslar=[]
    lst=[]
    for i in isciler:
        maaslar.append(i["maas"])
    for i in range(len(maaslar)):
        lst.append(maaslar[i].replace(valyuta,""))
    return lst
maaslar= Maaslar(isciler,"AZN")
print("Maaslar:",maaslar)

# cem maaslar
def Sum(maaslar):
    cem=0
    for i in maaslar:
        cem+= int(i)
    return cem

cemMaaslar= Sum(maaslar)
print("Maaslarin cemi:",cemMaaslar)

# vergi sonrasi maaslar
def vergisizMaas(maaslar,vergi):
    vergisizMaaslar=[]
    for i in maaslar:
        vergisizMaaslar.append(int(i)- int(i)/100*vergi)
    return vergisizMaaslar
vergisizMaaslar= vergisizMaas(maaslar,18)
print("Vergi cixildiqdan sonra maaslar:",vergisizMaaslar)

def yuksekMaas(maaslar):
    yuksekmaaslar=[]
    edediOrta=0
    for i in maaslar:
        edediOrta+=int(i)
    edediOrta/=len(maaslar)
    for i in maaslar:
        if int(i)> edediOrta:
            yuksekmaaslar.append(i)
    return yuksekmaaslar
yuksekmaaslar= yuksekMaas(maaslar)
print("Ortalamadan yuksek maaslar:",yuksekmaaslar)