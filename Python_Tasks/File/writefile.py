con=open('python.txt','a')
print("App`i dayandirmaq ucun : exit yazin")
while True:
    a= input("Melumat elave edin:")
    if a=="exit":
        break
    else:
        con.write(a)
        con.write("\n")