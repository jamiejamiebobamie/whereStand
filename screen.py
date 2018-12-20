

# #test function for grabbing screenshots over 'x' seconds

import sys
import time
from subprocess import call



def takePicsTime(sec):
    start = time.time()
    over = 0
    while over < sec:
        end = time.time()
        call(["screencapture", "./testPics/" + str(end) + ".jpg"])
        over = end - start

# def takePicsButton(sec):
#     x = None
#     while x == None:
#         end = time.time()
#         call(["screencapture", "./testPics/" + str(end) + ".jpg"])
#
#------
#         import time
# import threading

# # set global variable flag
# flag = 1
#
# def normal():
#     global flag
#     while flag==1:
#         print('normal stuff')
#         time.sleep(2)
#         if flag==False:
#             print('The while loop is now closing')
#
#
# def get_input():
#     global flag
#     keystrk=input('Press a key \n')
#     # thread doesn't continue until key is pressed
#     print('You pressed: ', keystrk)
#     flag=False
#     print('flag is now:', flag)
#
# n=threading.Thread(target=normal)
# i=threading.Thread(target=get_input)
# n.start()
# i.start()
#https://stackoverflow.com/questions/20576960/python-infinite-while-loop-break-on-user-input

if __name__ == "__main__":
    seconds = int(sys.argv[1]) #time to run
    takePicsTime(seconds)
