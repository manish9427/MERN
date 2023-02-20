# Express

It is a framework.

Framework - Syntax/Rules/Guidelines/Style
It imposes a certain way of achieving something

It makes very convinient for us - we have to learn how!!

##

- How to create multiple routes
  - Different Request methods
  - Static Routes
  - Dynamic Routes
- Response Status Codes

- Parameters (params)
- Query Params
- Request Body

CRUD Application for managing Employee Data

1. GET /employee/all -> All employees
2. POST /employee -> Add a new employee
   {
   "name": "Arun Kumar",
   "designation": "Staff Engineer",
   "gender": "male"
   }
3. PATCH /employee/:id -> Request Body to update the fields
4. DELETE /employee/:id -> Will delete the employee with the given id

JSON file.

#### ----------------------- What I have Learned ------------------

# serve

- server.listen
- server.get
- server.post
- server.patch
- server.delete

# res

- res.send

* res.status

# Params

- const variableName = req.params.variableName

# Query

- const query = rq.query
- console.log('Query',query)

# Body

- const body = req.body
- console.log('Body',body)

# express

- import the express{const express=require('express')}
- rap with the express{const fileName=express()}

# get

fileName.get()
-async and await

# post

fileName.post()

# patch

fileName.patch()

# delete

fileName.delete()
