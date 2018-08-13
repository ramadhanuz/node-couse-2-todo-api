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

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Djamal'})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // deleteOne
  // db.collection('Users').deleteOne({_id: new ObjectID('5b6d4ac1f68dd313307914c1')})
  //   .then((result) => {
  //     console.log(result);
  //   });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false})
  //   .then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users').deleteMany({name: 'Djamal'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5b6d4ac1f68dd313307914c1')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  //db.close();
  // MongoDB module v3 use client.close()
  // client.close();
});
