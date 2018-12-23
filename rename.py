#https://www.quora.com/How-do-I-rename-a-file-in-python

import os

for filename in os.listdir("uF/pics-noGreen/chosen"):
    filename_without_ext = os.path.splitext(filename)[0]
    extension = os.path.splitext(filename)[1]
    new_file_name = filename_without_ext+"_n"
    new_file_name_with_ext = new_file_name+extension
    print(new_file_name_with_ext)
    os.rename(os.path.join(path,filename),os.path.join(path,new_file_name_with_ext))
