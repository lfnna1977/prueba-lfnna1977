// we instantiate the library
var fuzzy = require('./lib/node-fuzzy');

// Test
var example = [{
    name: 'Numa',
    language: [{
        name: 'Javascript',
        expertise: 8
    }, {
        name: 'Node.js',
        expertise: 7
    }]
}, {
    name: 'Luis',
    language: [{
        name: 'HTML',
        expertise: 9
    }, {
        name: 'CSS',
        expertise: 10
    }]
}];

// Return first object of array "example"
console.log(fuzzy.search(example, /CSS/));