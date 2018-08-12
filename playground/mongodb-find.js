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

  db.collections((err, collections) => {
    console.log(`found ${collections.length} collection(s)`);
    // console.log(collections[0].s.name);
    for (var i = 0; i < collections.length; i++) {
      console.log(collections[i].s.name);
    }
  });

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b6e000d9c6c9c72f271bc1d')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

  var name = 'Ramadhanuz';
  var dbname = 'Users';
  db.collection(dbname).find({name: name}).toArray().then((docs) => {
    console.log(`found ${docs.length} document(s)`);
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(`unable to fetch ${dbname}`, err);
  });

  //db.close();
  // MongoDB module v3 use client.close()
  // client.close();
});
