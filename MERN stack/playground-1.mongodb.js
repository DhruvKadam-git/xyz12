/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('Employee');

// Insert a few documents into the info collection.
db.getCollection('info').insertMany(
    [
      {
        "item": "abc",
        "price": 10,
        "quantity": 2,
        "date": "2014-03-01T08:00:00Z"
      },
      {
        "item": "jkl",
        "price": 20,
        "quantity": 1,

        "date": "2014-03-01T09:00:00Z"
      },
      {
        "item": "xyz",
        "price": 5,
        "quantity": 10,
        "date": "2014-03-15T09:00:00Z"
      },
      {
        "item": "def",
        "price": 7.5,
        "quantity": 5,
        "date": "2015-06-04T05:08:13Z"
      },
      {
        "item": "ghi",
        "price": 15,
        "quantity": 3,
        "date": "2016-02-06T20:20:13Z"
      },
      {
        "item": "lmn",
        "price": 12,
        "quantity": 7,
        "date": "2014-05-01T10:00:00Z"
      },
      {
        "item": "opq",
        "price": 25,
        "quantity": 2,
        "date": "2014-05-02T11:30:00Z"
      },
      {
        "item": "rst",
        "price": 12,
        "quantity": 7,
        "date": "2014-05-03T12:45:00Z"
      },
      {
        "item": "uvw",
        "price": 30,
        "quantity": 1,
        "date": "2014-05-04T14:00:00Z"
      },
      {
        "item": "xyz",
        "price": 5,
        "quantity": 15,
        "date": "2014-05-05T15:15:00Z"
      }
    ]
  );



// Print a message to the output window.
console.log('data is running');

