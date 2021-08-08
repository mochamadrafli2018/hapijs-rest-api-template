# Bookshelf-API
This was a simple API portofolio that use Hapi (a Node Js framework) to accomplish final project in Dicoding Academy.

## Install nodemon 
To keep the server running even if the code has changed

`npm install nodemon --save-dev`

## Install ESLint for javascript styling

`npm install eslint --save-dev`

`npx eslint --init`

Execute ESLint with

`npm run lint`

Some of javascript styling in ESLint:
1. https://google.github.io/styleguide/jsguide.html
2. https://github.com/airbnb/javascript#arrow-functions
3. https://standardjs.com/

For better styling in VSCode, we can also donwload ESLint extension in VSCode

## Install Nanoid (String id handle and crate unique id number in API)

`npm install nanoid`

Then check package.json

## Install Hapi (Node Js Framework)

`npm install @hapi/hapi`

Then check package.json

## Running Hapi

`cd bookshelf-api`

`npm run start`

## Check the output at Postman or browser at :
1. localhost:5000/books to access all the book data
2. localhost: 5000/books/{id} to access book data by specific id

Reference: https://www.dicoding.com/academies/261/tutorials
