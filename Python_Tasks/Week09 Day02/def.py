telebeler=[
    {
        "ad":"Samir",
        "yas":23
    },
    {
        "ad":"Hesen",
        "yas":28
    },
    {
        "ad":"Memmed",
        "yas":34
    }
]
def oldestStudent(students):
    s=[]
    ad=""
    for i in students:
        s.append(i["yas"])
    for i in students:
        if i["yas"] == max(s):
            ad= i["ad"]
    print("En yasli telebenin adi",ad +"-dir ve onun",max(s),"yasi var.")
oldestStudent(telebeler)