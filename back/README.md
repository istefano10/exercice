## Prerequisites
* [Node.js and NPM](https://nodejs.org/en/)
* [MySQL](https://dev.mysql.com/downloads/installer/)

## Quick setup
1. `npm run config` to install the necessary packages and insert items to databse.
2. `npm start` to start the project.


## Technologies

1. `Node js` + `Express JS`
2. `Typescript` for strongly typed project, use interfaces and dtos
3. `Nodemon` for hot update of the project
4. For database i used `mysql2` library that is relational db. In this case i could leave out the databse and write all the jokes to a file because i only have a table. For example use the TS [file](https://github.com/istefano10/exercice/blob/main/back/src/examples/jokes.examples.ts) as a databese reading from the file and writing to the file. But i want to add willfully mysql for complete test.
6. `class` libraries for use class validators and transformers 
