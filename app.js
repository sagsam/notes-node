console.log("Starting app.js");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')

var user = os.userInfo();

// fs.appendFile('greetings.txt', 'Hello World!!', function(err) {
//   if(err){
//     console.log('error');
//   }
// });

// OR

fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);
