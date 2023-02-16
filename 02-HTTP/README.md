# HTTP Basics

Board: https://excalidraw.com/#json=9O5nOuBQ_4D7dqrw112mc,LjDB8SbUf_wiBvMth3gwKw

## What happens when we send a request from browser?

## What is HTTP?

Protocol

We define a set of rules/steps.
They are followed by each request.

Other protocols:

- TCP, POP, grpc, IMAP, FTP, SMTP, SSH

HTTP - Hyper Text Transfer Protocol
TCP - Transmission Control Protocol
SMTP - Simple Mail Transfer Protocol
SSH - Secure Shell - To control one terminal from another terminal

## What does HTTP do?

It allows us to send requests from browser and we immediately get the response.

Each request asks for some type of resource (HTML, CSS, JS, Image, MP4, JSON).

## Working of HTTP

3-way handshake

Different HTTP Requests and Response Codes

## Simple HTTP Server using Core Module

<!-- ------------------------------------------what i have learned--------------------- -->

Q=what happens when you send a request to server
client-->url-->DNS--->IP ADDRESS--->SERVER

===>PORTS{ex 3000}
->1 to 2000
2001 to 65000
IP ADDRESS:PORTS

==>HTTP methods/verbs
GET -->Read
POST-->Insert
PUT-->Insert (new data) or Update(existing data )
PATCH-->Upadte(existng Resourse)
DELETE-->Completely Remove the Resourse
OPTION-->to identify if server supposrt the method for an endpoint

==>Pre-flight
OPTION http://examples.com/user/34
GET
PATCH
DELETE
GET/user/34

==>Endpoint
http://examples.com/user/34
http://examples.com/welcome.html

Method
GET

GET/welcome.html
POST/register
PATCH/profile

HTTP Responses

==>STATUS CODE
2xx-->SUCCESS
3xx-->REDIRECTION
4xx -->Something is wrong with the request
5xx->Something went wrong while processing the request

==>PATCH/profile
Request Body:{
"address:"Chirgaon"
}
200-SUCCESS
400 -->Something is wrong with the request
500-Something went wrong

==>we are going to make our own server

<!-- server.js -->

-import HTTP from HTTP
and after that take the variable and in that take function creatServer((req,res)=>{}) and after that server.listen(PORTS) and write some commnet into the console.log()

<!-- nodemon -->

npm i -g nodemon

==>res.write
this function will show what ever we write inside in that fuction on to the screen

# Note allbase put {res.end();} at the end

## always make sure to import the package

# we can also change url

req.url = 'http://example.com
req.method = GET
