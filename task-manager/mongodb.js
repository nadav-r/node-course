const { MongoClient, ObjectID } = require('mongodb')
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)
    // db.collection('users').findOne({ _id: new ObjectID("5dbd4169cca775110c533d21") }, (error, user) => {
    //     if (error) {
    //         return console.log('unable to fetch')
    //     }
    //     console.log(user)
    // })

    db.collection('users').find({ age: 27 }).toArray((error, users) => {
        console.log(users)
    })
})
