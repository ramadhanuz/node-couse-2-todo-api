// MongoDB module v2
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// MogoDB module v3 using (err, client)
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
  // MongoDB module v3 add a constant or a variable to get the db reference
  // const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Ramadhanuz',
  //   age: 31,
  //   location: 'Jakarta'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert users', err);
  //   }
  //
  //   //console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id);
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
  // MongoDB module v3 use client.close()
  // client.close();
});
