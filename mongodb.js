 // const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID} = require('mongodb');


const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName  = 'task-manager'

// const id = new ObjectID()

// console.log(id)
// console.log(id.id)
// console.log(id.toHexString().length)


MongoClient.connect(connectionUrl, {useUnifiedTopology: true},(error, client) =>{
     
    if(error){
        return console.log('unable to connect to database!')
    }

    const db = client.db(databaseName)
    
    // db.collection('users').deleteMany({
    //     age: 30
    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'not yet completed'
    }).then((result) =>{
        console.log(result)
    }).catch((error) =>{
        console.log(error)
    })
    
   })
  
   