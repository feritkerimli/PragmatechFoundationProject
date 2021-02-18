
print("App`i dayandirmaq ucun : exit yazin")
while True:
    con=open('Python_Tasks/File/python.txt','a')
    a= input("Melumat elave edin:")
    if a=="exit":
        break
        con.close()
    else:
        con.write(a)
        con.write("\n")
        con.close()
