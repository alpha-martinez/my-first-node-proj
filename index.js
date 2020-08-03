// const myModule = require('./myModule.js');
// const fs = require('fs');
// const http = require('http') 

// http.createServer((req, res)=>{
//      res.write('Hello, World!');
//      res.end() 
//     }).listen(8080)

// fs.readFile('story.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.log(`there's an issue`)
//     } else {
//         console.log(data)
//     }
// })

// console.log(myModule.beBasic());
// console.log('hellow world!');
// myModule.count ();

// console.log(myModule.myName());

// let i = 1;



// const count = () => {
//     console.log(i)
//     i=i*2
// }

// const myTimer = setInterval(count, 1000);

// const today = new Date();

// console.log(today);
const moment = require('moment')
console.log(moment("7/21/1996", "MM DD YYYY").format("dddd [the] Do [of] MMM [in the year] YYYY"));

console.log(moment(new Date()).diff(moment('1996-21-07', 'MM/DD/YYYY'), 'years'));

//Wednesday the 11th of September in the year 1985