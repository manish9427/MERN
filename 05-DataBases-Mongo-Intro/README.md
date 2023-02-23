# Database & MongoDB Introduction

Board Link: https://excalidraw.com/#json=WyVYZ-zEU1jCmZxvWsaYR,vNd7I9CKeOBdp9HNm03BQw

```

// To show the list of database
test> show dbs

// To temporarily create a database names pt-web-8-b
test> use pt-web-8-b

// Create a collection in pt-web-8-b database
test> db.createCollection('students')
```

<!-- -------------------What I have Learned---------------------------------- -->

# How To show the list of database

- show dbs

# To temporarily create a database names pt-web-8-b

- use pt-web-8-b

# Create a collection in pt-web-8-b database

- db.createCollection('students')

# inorder to see the number of collection present on the existing database

- show collections

# How to Insert the element into the collection

- db.{Name of the collection}.Insert({pass the data over here})

# How to see what is present inside my collection

db.{Name of the collection}.find()
