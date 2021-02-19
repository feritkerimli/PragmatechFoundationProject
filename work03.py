# 3 cu sual

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