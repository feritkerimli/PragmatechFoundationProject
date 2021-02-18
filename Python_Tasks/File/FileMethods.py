#create and write file
with open("Python_Tasks/File/newfile.py","a") as a:
    a.write("print('Hello World!')")

# read file
with open("Python_Tasks/File/newfile.py","r+") as d:
    print(d.readline())
# remove file
import os
os.remove("Python_Tasks/File/newfile.py")
