from pymongo import MongoClient

connection = MongoClient("localhost", 27017)

database = connection['ZipperWatch']

import gridfs
#Create an object of GridFs for the above database.
fs = gridfs.GridFS(database)

#Define an image object with the location.
file = "C:/Users/pudy6/Pictures/vue_icon_130791.png"

with open(file, 'rb') as f:
    contents = f.read()

fs.put(contents, filename="file")