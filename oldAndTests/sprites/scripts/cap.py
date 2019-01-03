import cv2
vidcap = cv2.VideoCapture('../sprite-title/titleSprite-anims-master.mp4')
success,image = vidcap.read()
count = 0
while success:
  cv2.imwrite("../sprite-title/pics-Green/frame%d.jpg" % count, image)     # save frame as JPEG file
  success,image = vidcap.read()
  print('Read a new frame: ', success)
  count += 1

#https://stackoverflow.com/questions/33311153/python-extracting-and-saving-video-frames
