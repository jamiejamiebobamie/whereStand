# https://stackoverflow.com/questions/273946/how-do-i-resize-an-image-using-pil-and-maintain-its-aspect-ratio
import os, sys
from PIL import Image
import glob

size = 150, 150

frames = glob.glob("pics-noGreen-copy2/chosen/*.png")
for frame in frames:
    with open(frame, 'rb') as file:
        outfile = os.path.splitext(file.name)[0] + ".png"
        im = Image.open(file)
        im.thumbnail(size, Image.ANTIALIAS)
        im.save(outfile, "PNG")
