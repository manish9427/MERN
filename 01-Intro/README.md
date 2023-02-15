# Intro to Nodejs

Backend Development

Ryan Dahl - Created Nodejs

Runtine - V8 Javascript Engine (Google Chrome)

Backend - Some program which is running constantly (24x7) on a server (computer)

Request -> Backend -> Response

1.  Introduction

    - What is Nodejs
      It is a runtime for Javascript.
      Executes Javascript code for us.

    Nodejs - REPL env

2.  What are globals variables available in Nodejs
3.  Modules

    - Core Modules
    - User Defined Modules
    - Third Party Modules (npm)

<!---------------------------- what i have learned ------------ -->

=>the first thing is that node Js is the run time for Javascript and it id the program which executes javascript code for us.

=>how we can run are code in terminal only by using node {filename}

=>"process.argv"
-it provide the path of the for the variable in the the form of array of strings
-we can also pass the other command it will show it in the terminalas as in the form of array of strings
-we can also asign the value to the variable for the given index and it will show our assigned value in the form of array of strings{var value=process.argv[index]} and after that pass it on to the console and write dow the command

=>crypto
->randomInt(min,max)
for this first import this {const crypto =require('crypto')}
and after that use {console.log(crypto.randomInt(min,max))}

->os
for this first import this {const os =require('os')}
and after that use {console.log(os.cpus())}

->fs
for this first import this {const fs =require('fs')}
and after that use {console.log(fs.readFileSync(path,encoding='utf8')})}

=>user define function
