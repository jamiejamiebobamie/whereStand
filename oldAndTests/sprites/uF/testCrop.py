from PIL import Image
import glob
# from __future__ import print_function

# count = 0

# frames = glob.glob("pics/*.jpg")
frames = glob.glob("pics-noGreen/*.png")
for frame in frames:
    with open(frame, 'rb') as file:
        im = Image.open(file)
        # print(file.name)
        # print(im.format, im.size, im.mode)
        box = (100, 100, 1200, 975)
        region = im.crop(box)
        # region.show()
        # region.save('my_image.png')
        region.save(file.name)
        # count += 1
# 
# frame = "frame139.png"
# with open(frame, 'rb') as file:
#     im = Image.open(file)
#     box = (100, 100, 1200, 975)
#     region = im.crop(box)
#     region.show()
