#https://stackoverflow.com/questions/21217384/remove-background-colour-from-image-using-python-pil/21228321

# import numpy as np
# from PIL import Image
#
# im = Image.open('my_file.tif')
# im = im.convert('RGBA')
# data = np.array(im)
# # just use the rgb values for comparison
# rgb = data[:,:,:3]
# color = [246, 213, 139]   # Original value
# black = [0,0,0, 255]
# white = [255,255,255,255]
# mask = np.all(rgb == color, axis = -1)
# # change all pixels that match color to white
# data[mask] = white
#
# # change all pixels that don't match color to black
# ##data[np.logical_not(mask)] = black
# new_im = Image.fromarray(data)
# new_im.save('new_file.tif')

#------

#http://salgat.blogspot.com/2015/04/using-pythons-pil-library-to-remove.html

# from PIL import Image
# from PIL import ImageFilter
# import os
# count = 0
# while count < 2:
#     for filename in os.listdir("./pics"): # parse through file list in the current directory
#         if filename[-3:] == "jpg":
#             with open(filename, 'rb') as file:
#                 im = Image.open(file)
#                 img = img.convert("RGBA")
#                 pixdata = img.load()
#                 for y in xrange(img.size[1]):
#                     for x in xrange(img.size[0]):
#                         r, g, b, a = img.getpixel((x, y))
#                         if (r < 130) and (g < 60) and (b < 60):
#                             pixdata[x, y] = (255, 255, 255, 0)
#                             #Remove anti-aliasing outline of body.
#                             if r == 0 and g == 0 and b == 0:
#                                 pixdata[x, y] = (255, 255, 255, 0)
#                 img2 = img.filter(ImageFilter.GaussianBlur(radius=1))
#                 img2.save(filename, "PNG")
#                 count += 1


##---------------

#https://github.com/kimmobrunfeldt/howto-everything/blob/master/remove-green.md
#
# """
# Removes greenscreen from an image.
# Usage: python greenscreen_remove.py image.jpg
# """
#
# from PIL import Image
# import sys
# import os
#
#
# def rgb_to_hsv(r, g, b):
#     maxc = max(r, g, b)
#     minc = min(r, g, b)
#     v = maxc
#     if minc == maxc:
#         return 0.0, 0.0, v
#     s = (maxc-minc) / maxc
#     rc = (maxc-r) / (maxc-minc)
#     gc = (maxc-g) / (maxc-minc)
#     bc = (maxc-b) / (maxc-minc)
#     if r == maxc:
#         h = bc-gc
#     elif g == maxc:
#         h = 2.0+rc-bc
#     else:
#         h = 4.0+gc-rc
#     h = (h/6.0) % 1.0
#     return h, s, v
#
#
# GREEN_RANGE_MIN_HSV = (100, 80, 70)
# GREEN_RANGE_MAX_HSV = (185, 255, 255)
#
# def main():
#     # Load image and convert it to RGBA, so it contains alpha channel
#     file_path = sys.argv[1]
#     name, ext = os.path.splitext(file_path)
#     im = Image.open(file_path)
#     im = im.convert('RGBA')
#
#     # Go through all pixels and turn each 'green' pixel to transparent
#     pix = im.load()
#     width, height = im.size
#     for x in range(width):
#         for y in range(height):
#             r, g, b, a = pix[x, y]
#             h_ratio, s_ratio, v_ratio = rgb_to_hsv(r / 255.0, g / 255.0, b / 255.0)
#             h, s, v = (h_ratio * 360, s_ratio * 255, v_ratio * 255)
#
#             min_h, min_s, min_v = GREEN_RANGE_MIN_HSV
#             max_h, max_s, max_v = GREEN_RANGE_MAX_HSV
#             if min_h <= h <= max_h and min_s <= s <= max_s and min_v <= v <= max_v:
#                 pix[x, y] = (0, 0, 0, 0)
#
#
#     im.save(name + '.png')
#
#
# if __name__ == '__main__':
#     main()



#------------


from PIL import Image
import sys
import os
import glob

def rgb_to_hsv(r, g, b):
    maxc = max(r, g, b)
    minc = min(r, g, b)
    v = maxc
    if minc == maxc:
        return 0.0, 0.0, v
    s = (maxc-minc) / maxc
    rc = (maxc-r) / (maxc-minc)
    gc = (maxc-g) / (maxc-minc)
    bc = (maxc-b) / (maxc-minc)
    if r == maxc:
        h = bc-gc
    elif g == maxc:
        h = 2.0+rc-bc
    else:
        h = 4.0+gc-rc
    h = (h/6.0) % 1.0
    return h, s, v


GREEN_RANGE_MIN_HSV = (100, 80, 70)
GREEN_RANGE_MAX_HSV = (185, 255, 255)

frames = glob.glob("pics_reduced/*.jpg")
for frame in frames:
    with open(frame, 'rb') as file:
        im = Image.open(file)
        name = frame[13:-3]
        im = im.convert('RGBA')
        pix = im.load()
        width, height = im.size
        for x in range(width):
            for y in range(height):
                r, g, b, a = pix[x, y]
                h_ratio, s_ratio, v_ratio = rgb_to_hsv(r / 255.0, g / 255.0, b / 255.0)
                h, s, v = (h_ratio * 360, s_ratio * 255, v_ratio * 255)

                min_h, min_s, min_v = GREEN_RANGE_MIN_HSV
                max_h, max_s, max_v = GREEN_RANGE_MAX_HSV
                if min_h <= h <= max_h and min_s <= s <= max_s and min_v <= v <= max_v:
                    pix[x, y] = (0, 0, 0, 0)
        im.save(name + 'png')

if __name__ == '__main__':
    main()
