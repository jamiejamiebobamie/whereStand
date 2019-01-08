# #https://gist.github.com/gourneau/939252/6f3bee34c4e2becb7684680c58a7343d5be99334#file-python-pil-image-sprite-py-L11
#
#
# #!/usr/bin/python
#
# # This work is licensed under the Creative Commons Attribution 3.0 United
# # States License. To view a copy of this license, visit
# # http://creativecommons.org/licenses/by/3.0/us/ or send a letter to Creative
# # Commons, 171 Second Street, Suite 300, San Francisco, California, 94105, USA.
#
# # from http://oranlooney.com/make-css-sprites-python-image-library/
# # Orignial Author Oran Looney <olooney@gmail.com>
#
# #mods by Josh Gourneau <josh@gourneau.com> to make one big horizontal sprite JPG with no spaces between images
# import os
# from PIL import Image
# import glob
#
# #get your images using glob
# iconMap = glob.glob("uF/pics-noGreen/chosen/*.jpg")
# #just take the even ones
# #iconMap = iconMap[::2]
#
# print(len(iconMap))
#
# images = [Image.open(filename) for filename in iconMap]
#
# print("%d images will be combined." % len(images))
#
# image_width, image_height = images.size
#
# print("all images assumed to be %d by %d." % (image_width, image_height))
#
# master_width = (image_width * len(images) )
# #seperate each image with lots of whitespace
# master_height = image_height
# print("the master image will by %d by %d" % (master_width, master_height))
# print("creating image...",)
# master = Image.new(
#     mode='RGBA',
#     size=(master_width, master_height),
#     color=(0,0,0,0))  # fully transparent
#
# print("created.")
#
# for count, image in enumerate(images):
#     location = image_width*count
#     print("adding %s at %d..." % (iconMap[count][1], location),)
#     master.paste(image,(location,0))
#     print("added.")
# print("done adding icons.")
#
# print("saving master.jpg...",)
# master.save('master.jpg', transparency=0 )
# print("saved!")

#------------

# https://minzkraut.com/2016/11/23/making-a-simple-spritesheet-generator-in-python/

#NOTE: THE WAY THIS PROGRAM SORTS THE PHOTOS AND CREATES THE SPRITE SHEET ISN'T NUMERICALLY: 1,2,3. IT IS INSTEAD: 1, 11, 111, ETC... I HAVE NO IDEA WHY.

from PIL import Image
import os, math, time
# max_frames_row = 10.0
# max_frames_row = 1 #attempting to make a single column spritesheet
frames = []
tile_width = 0
tile_height = 0

spritesheet_width = 0
spritesheet_height = 0

pics = "../sprite-title/pics-noGreen/title-idle/"

files = os.listdir(pics)
files.sort()
print(files)

max_frames_row = len(files)

for current_file in files :
    try:
        with Image.open(pics + current_file) as im :
            frames.append(im.getdata())
    except:
        print(current_file + " is not a valid image")

tile_width = frames[0].size[0]
tile_height = frames[0].size[1]

# if len(frames) > max_frames_row :
#     spritesheet_width = tile_width * max_frames_row
#     required_rows = math.ceil(len(frames)/max_frames_row)
#     spritesheet_height = tile_height * required_rows
# else:
#     spritesheet_width = tile_width*len(frames)
#     spritesheet_height = tile_height

# #attempting to make all sprite sheets a single row
spritesheet_width = tile_width * max_frames_row
required_rows = math.ceil(len(frames)/max_frames_row)
spritesheet_height = tile_height * required_rows

print(spritesheet_height)
print(spritesheet_width)

spritesheet = Image.new("RGBA",(int(spritesheet_width), int(spritesheet_height)))

for current_frame in frames :
    top = tile_height * math.floor((frames.index(current_frame))/max_frames_row)
    left = tile_width * (frames.index(current_frame) % max_frames_row)
    bottom = top + tile_height
    right = left + tile_width

    box = (left,top,right,bottom)
    box = [int(i) for i in box]
    cut_frame = current_frame.crop((0,0,tile_width,tile_height))

    spritesheet.paste(cut_frame, box)

spritesheet.save("spritesheet" + time.strftime("%Y-%m-%dT%H-%M-%S") + ".png", "PNG")
