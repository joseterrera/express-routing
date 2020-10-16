### Routing with Express

This is an express application that performs statistical operations (mean, median and mode) given an arbitrary list of numbers. Each route will have an operation. 

The numbers will be given as query parameters, and the app will check if there are errors in this query. The returned results will be in JSON format.

Example of good routes:
http://localhost:3000/mode?nums=1,3,5,6
http://localhost:3000/median?nums=1,3,5,6
http://localhost:3000/mean?nums=1,3,5,6

Example of bad route:
http://localhost:3000/mode?nums=1,3,5,foo
In this case, it will return an error

### To start this app:

1. Clone or download this project
2. Start your node application `npm init`
3. Install express `npm install express`
4. Install globally nodemon `npm install --global nodemon`
5. Run `nodemon app.js`


### To Run the tests on your terminal:

1. Install Jest globally: `npm i --global jest`
2. Run `jest helpers.test.js`
